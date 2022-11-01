const url = "https://restcountries.com/v3.1/all";

const pageCountries = document.querySelector(".container");

//Pegar todos os países
async function getAllCountries() {
  const response = await fetch(url);
  const allCountries = await response.json();

  allCountries.map((allCountries) => {
    //criando as tags html que vão receber os países
    const div = document.createElement("div");
    const flag = document.createElement("img");
    const title = document.createElement("h2");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const capital = document.createElement("p");

    flag.src = allCountries.flags.svg;
    title.innerText = allCountries.name.common;
    title.classList.add("title");
    population.innerText = allCountries.population;
    region.innerText = allCountries.region;
    region.classList.add("region");
    capital.innerText = allCountries.capital;

    div.classList.add("countrie-container");
    div.onclick = teste;

    div.appendChild(flag);
    div.appendChild(title);
    div.appendChild(population);
    div.appendChild(region);
    div.appendChild(capital);
    pageCountries.appendChild(div);
  })
}

//Comparando input com todos os países pegos da API e renderizados na página inicial
function valueCompare(name) {
  const countrieTitle = pageCountries.getElementsByTagName("h2");
  const countrieContainer = document.querySelectorAll(".countrie-container");
  
  // Fazendo a comparação a cada letra digitada no input
  for (let i = 0; countrieTitle.length; i++) {
    
    if(countrieTitle[i] != null) {
      const match = countrieContainer[i].getElementsByTagName("h2")[0];

      if(match) {
        let countrieName = match.textContent || match.innerHTML;

        if(countrieName.toUpperCase().indexOf(name) > -1){
          countrieContainer[i].style.display = "";
        } else {
          countrieContainer[i].style.display = "none";
        }
      }

    } else {
      return
    }
  }
}

//Comparando filtro por região com todos os países pegos da API e renderizados na página inicial
function compareRegion(region) {
  const countrieRegion = pageCountries.querySelectorAll(".region");
  const countrieContainer = document.querySelectorAll(".countrie-container");

  if(!region) {
    for(let j = 0; countrieRegion.length; j++) {
        countrieContainer[j].style.display = "";
    }
  } else {
    for (let i = 0; countrieRegion.length; i++) {
      if(countrieRegion[i] != null) {
        const match = countrieContainer[i].querySelectorAll(".region")[0];
        if(match) {
          let regionValue = match.textContent || match.innerHTML;
          if(regionValue == region) {
            countrieContainer[i].style.display = "";
          } else {
            countrieContainer[i].style.display = "none";
          }
        }
      } else {
        return
      }
    }
  }
}

//Capturando texto enquanto ele é digitado no input
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("keyup", (e) => {
  let text = searchInput.value.toUpperCase();
  valueCompare(text);
})

//Capturando região selecionada no select
const filterByRegion = document.getElementById("select");
filterByRegion.addEventListener("change", (e) => {
  const regionValue = filterByRegion.options[filterByRegion.selectedIndex].value;
  console.log(regionValue);
  compareRegion(regionValue);
})

//Linkando a div dos países à página de detalhes
function teste() {
  window.location = "countrie.html";
}


getAllCountries();
