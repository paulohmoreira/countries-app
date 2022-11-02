const urlSearchParams = new URLSearchParams(window.location.search);
const countryName = urlSearchParams.get("name");

const url = "https://restcountries.com/v2/name";
const alphaUrl = "https://restcountries.com/v2/alpha";

console.log(countryName);

//Pegar pegar país pelo nome na API
async function getCountryByName(url) {
  const response = await fetch(url);
  const country = await response.json();
  console.log(country);

  let topLevelDomain = [];
  let currencies = [];
  let languages = [];
  let borders = [];

  country.map((country) => {
    //loop para pegar todos os itens do array topLevelDomain
    country.topLevelDomain.map((element) => {
      topLevelDomain += `<span>${element}</span>`;
    });
    console.log(topLevelDomain);

    //loop para pegar todos os itens do array currencies
    country.currencies.map((element) => {
      currencies += `<span>${element.name}</span>`;
    });
    console.log(currencies);

    //loop para pegar todos os itens do array currencies
    country.languages.map((element) => {
      languages += `<span>${element.name}</span>`;
    });
    console.log(languages);

    //loop para pegar os borders
    try {
      country.borders.map((element) => {
        borders += `<button class="btn">${element}</button>`;
      });
      console.log(borders);
    } catch (error) {
      borders = "<p>This country have no border countries!</p>";
    }

    //Renderizando os dados capturados
    document.querySelector(".container").innerHTML = `
    <img src="${country.flags.svg}" alt="country Image">
    <div class="country-text">
      <h3>${country.name}</h3>
      <div class="info">
        <div class="left">
           <p><span>Native Name: </span> ${country.nativeName}</p>
           <p><span>Population: </span>${country.population}</p>
           <p><span>Region: </span>${country.region}</p>
           <p><span>Sub Region: </span>${country.subregion}</p>
           <p><span>Capital: </span>${country.capital}</p>
         </div>
         <div class="right">
            <p><span>Top Level Domain: </span>${topLevelDomain}</p>
            <p><span>Currencies: </span>${currencies}</p>
            <p class="languages">
              <span>Languages: ${languages}</span>
            </p>
         </div>
        </div>
        <div class="borders" id="borders">Border Countries:${borders}</div>
    </div>`;
  });
  getClickedBorder();
}

//Pegar pegar país pelo Alpha code na API
function getCountryByAlphaCode(url) {
  fetch(url)
    .then((response) => response.json())
    .then((country) => {
      console.log(country);

      let topLevelDomain = [];
      let currencies = [];
      let languages = [];
      let borders = [];

      //loop para pegar todos os itens do array topLevelDomain
      country.topLevelDomain.map((element) => {
        topLevelDomain += `<span>${element}</span>`;
      });
      console.log(topLevelDomain);

      //loop para pegar todos os itens do array currencies
      country.currencies.map((element) => {
        currencies += `<span>${element.name}</span>`;
      });
      console.log(currencies);

      //loop para pegar todos os itens do array currencies
      country.languages.map((element) => {
        languages += `<span>${element.name}</span>`;
      });
      console.log(languages);

      //loop para pegar os borders
      try {
        country.borders.map((element) => {
          borders += `<button class="btn">${element}</button>`;
        });
        console.log(borders);
      } catch (error) {
        borders = "<p>This country have no border countries!</p>";
      }

      //Renderizando os dados capturados
      document.querySelector(".container").innerHTML = `
      <img src="${country.flags.svg}" alt="country Image">
      <div class="country-text">
        <h3>${country.name}</h3>
        <div class="info">
          <div class="left">
             <p><span>Native Name: </span> ${country.nativeName}</p>
             <p><span>Population: </span>${country.population}</p>
             <p><span>Region: </span>${country.region}</p>
             <p><span>Sub Region: </span>${country.subregion}</p>
             <p><span>Capital: </span>${country.capital}</p>
           </div>
           <div class="right">
              <p><span>Top Level Domain: </span>${topLevelDomain}</p>
              <p><span>Currencies: </span>${currencies}</p>
              <p class="languages">
                <span>Languages: ${languages}</span>
              </p>
           </div>
          </div>
          <div class="borders" id="borders">Border Countries:${borders}</div>
      </div>`;

      getClickedBorder();
    });
}

function getClickedBorder() {
  const button = document.querySelectorAll("button");
  const divContainer = document.querySelector(".container");
  button.forEach((element) => {
    element.addEventListener("click", () => {
      divContainer.innerHTML = "";
      getCountryByAlphaCode(`${alphaUrl}/${element.innerText}`);
    });
  });
}

// Assegurando que essa função executara primeiro
(function () {
  getCountryByName(`${url}/${countryName}?fullText=true`);
})();
