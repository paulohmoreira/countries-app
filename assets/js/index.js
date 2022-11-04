const url = "https://restcountries.com/v2/all";

const pageCountries = document.querySelector(".container");

//Pegar todos os países
async function getAllCountries() {
  const response = await fetch(url);
  const allCountries = await response.json();
  console.log(allCountries)


  allCountries.map((allCountries) => {
    //criando as tags html que vão receber os países
    const div = document.createElement("div");
    const flag = document.createElement("img");
    const divCountryDetails = document.createElement("div");
    const title = document.createElement("h2");
    const population = document.createElement("p");
    const spanPopulation = document.createElement("span");
    const region = document.createElement("p");
    const spanRegion = document.createElement("span");
    const capital = document.createElement("p");
    const spanCapital = document.createElement("span");

    flag.src = allCountries.flags.svg;
    title.innerText = allCountries.name;
    title.classList.add("title");
    population.innerText = ("Population: ");
    spanPopulation.innerText = allCountries.population;
    region.innerText = ("Region: ");
    spanRegion.innerText = allCountries.region;
    spanRegion.classList.add("region");
    capital.innerText = ("Capital: ");
    spanCapital.innerText = allCountries.capital;

    div.classList.add("country-container");
    divCountryDetails.classList.add("country-details");

    div.appendChild(flag);
    divCountryDetails.appendChild(title);
    population.appendChild(spanPopulation);
    divCountryDetails.appendChild(population);
    region.appendChild(spanRegion);
    divCountryDetails.appendChild(region);
    capital.appendChild(spanCapital);
    divCountryDetails.appendChild(capital);
    div.appendChild(divCountryDetails);
    pageCountries.appendChild(div);
  })
  // Chamando função para pegar país quando for clicado
  getClickedCountry();
}

//Capturando texto enquanto ele é digitado no input
const searchInput = document.querySelector("#search-input");
if(searchInput){
  searchInput.addEventListener("keyup", () => {
    let text = searchInput.value.toUpperCase();
    valueCompare(text);
  })
}

//Capturando região selecionada no select
const filterByRegion = document.getElementById("select");
filterByRegion.addEventListener("change", () => {
  try {
    const regionValue = filterByRegion.options[filterByRegion.selectedIndex].value;
    console.log(regionValue);
    compareRegion(regionValue);
  } catch (error) {
    console.log('Contornado erro que eu ainda não sei resolver xD')
  }
})

//Comparando input com todos os países pegos da API e renderizados na página inicial
function valueCompare(name) {
  const countryTitle = pageCountries.getElementsByTagName("h2");
  const countryContainer = document.querySelectorAll(".country-container");
  
  // Fazendo a comparação a cada letra digitada no input
  for (let i = 0; countryTitle.length; i++) {
    
    if(countryTitle[i] != null) {
      const match = countryContainer[i].getElementsByTagName("h2")[0];

      if(match) {
        let countryName = match.textContent || match.innerHTML;

        if(countryName.toUpperCase().indexOf(name) > -1){
          countryContainer[i].style.display = "";
        } else {
          countryContainer[i].style.display = "none";
        }
      }

    } else {
      return
    }
  }
}

//Comparando filtro por região com todos os países pegos da API e renderizados na página inicial
function compareRegion(region) {
  const countryRegion = pageCountries.querySelectorAll(".region");
  const countryContainer = document.querySelectorAll(".country-container");

  if(!region) {
    for(let j = 0; countryRegion.length; j++) {
        countryContainer[j].style.display = "";
    }
  } else {
    for (let i = 0; countryRegion.length; i++) {
      if(countryRegion[i] != null) {
        const match = countryContainer[i].querySelectorAll(".region")[0];
        if(match) {
          let regionValue = match.textContent || match.innerHTML;
          if(regionValue == region) {
            countryContainer[i].style.display = "";
          } else {
            countryContainer[i].style.display = "none";
          }
        }
      } else {
        return
      }
    }
  }
}

//Linkando a div dos países à página de detalhes
function changePage(name) {
  window.location = `country.html?name=${name}`;
}

// Função que pega o país clicado
function getClickedCountry(){
  const countryContainer = document.querySelectorAll(".country-container");
  countryContainer.forEach(element => {
    element.addEventListener("click", () =>{
      changePage(element.children[1].children[0].innerHTML);
    })
  })
}

// Executar primeiro a função de pegar todos os países da API
(function () {
  getAllCountries();
})();