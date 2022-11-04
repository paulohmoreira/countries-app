const urlSearchParams = new URLSearchParams(window.location.search);
const countryName = urlSearchParams.get("name");

const url = "https://restcountries.com/v2/name";
const alphaUrl = "https://restcountries.com/v2/alpha";

//Pegar pegar país pelo nome na API
async function getCountryByName(url) {
  const response = await fetch(url);
  const country = await response.json();

  let topLevelDomain = [];
  let currencies = [];
  let languages = [];
  let borders = [];

  country.map((country) => {
    //loop para pegar todos os itens do array topLevelDomain
    country.topLevelDomain.map((element) => {
      topLevelDomain += `<span class="inline-block">${element}</span>`;
    });

    //loop para pegar todos os itens do array currencies
    country.currencies.map((element) => {
      currencies += `<span class="inline-block">${element.name}</span>`;
    });

    //loop para pegar todos os itens do array currencies
    country.languages.map((element) => {
      languages += `<span class="inline-block">${element.name}</span>`;
    });

    //loop para pegar os borders
    try {
      country.borders.map((element) => {
        borders += ` <button class="btn">${element}</button> `;
      });
    } catch (error) {
      borders = "<p>This country have no border countries!</p>";
    }

    //Renderizando os dados capturados
    document.querySelector(".flex-container").innerHTML = `
    <img src="${country.flags.svg}" alt="country Image">
    <div class="country-text">
      <h3>${country.name}</h3>
      <div class="info">
        <div class="left">
           <p class="details"><span class="strong">Native Name: </span> ${country.nativeName}</p>
           <p class="details"><span class="strong">Population: </span>${country.population}</p>
           <p class="details"><span class="strong">Region: </span>${country.region}</p>
           <p class="details"><span class="strong">Sub Region: </span>${country.subregion}</p>
           <p class="details"><span class="strong">Capital: </span>${country.capital}</p>
         </div>
         <div class="right">
            <p class="details"><span class="strong">Top Level Domain: </span>${topLevelDomain}</p>
            <p class="details"><span class="strong">Currencies: </span>${currencies}</p>
            <p class="languages details">
              <span class="strong">Languages: </span>${languages}
            </p>
         </div>
        </div>
        <div class="border-container">
          <h5>Border Countries:</h5>
          <div class="borders" id="borders">
            ${borders}
          </div>
        </div>
    </div>`;
  });
  getClickedBorder();
}

//Pegar pegar país pelo Alpha code na API
function getCountryByAlphaCode(url) {
  fetch(url)
    .then((response) => response.json())
    .then((country) => {

      let topLevelDomain = [];
      let currencies = [];
      let languages = [];
      let borders = [];

      //loop para pegar todos os itens do array topLevelDomain
      country.topLevelDomain.map((element) => {
        topLevelDomain += `<span class="inline-block">${element}</span>`;
      });

      //loop para pegar todos os itens do array currencies
      country.currencies.map((element) => {
        currencies += `<span class="inline-block">${element.name}</span>`;
      });

      //loop para pegar todos os itens do array languages
      country.languages.map((element) => {
        languages += `<span class="inline-block">${element.name}</span>`;
      });
      

      //loop para pegar os borders
      try {
        country.borders.map((element) => {
          borders += `<button class="btn">${element}</button>`;
        });
      } catch (error) {
        borders = "<p>This country have no border countries!</p>";
      }

      //Renderizando os dados capturados
      document.querySelector(".flex-container").innerHTML = `
      <img src="${country.flags.svg}" alt="country Image">
      <div class="country-text">
        <h3>${country.name}</h3>
        <div class="info">
          <div class="left">
             <p class="details"><span class="strong">Native Name: </span> ${country.nativeName}</p>
             <p class="details"><span class="strong">Population: </span>${country.population}</p>
             <p class="details"><span class="strong">Region: </span>${country.region}</p>
             <p class="details"><span class="strong">Sub Region: </span>${country.subregion}</p>
             <p class="details"><span class="strong">Capital: </span>${country.capital}</p>
           </div>
           <div class="right">
              <p class="details"><span class="strong">Top Level Domain: </span>${topLevelDomain}</p>
              <p class="details"><span class="strong">Currencies: </span>${currencies}</p>
              <p class="languages details">
                <span class="strong">Languages: </span>${languages}
              </p>
           </div>
          </div>
          <div class="border-container">
          <h5>Border Countries:</h5>
          <div class="borders" id="borders">
            ${borders}
          </div>
        </div>
      </div>`;

      getClickedBorder();
    });
}

function getClickedBorder() {
  const button = document.querySelectorAll("button");
  const divContainer = document.querySelector(".flex-container");
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
