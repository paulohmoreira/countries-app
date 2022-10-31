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
    capital.innerText = allCountries.capital;

    div.classList.add("countrie-container");

    div.appendChild(flag);
    div.appendChild(title);
    div.appendChild(population);
    div.appendChild(region);
    div.appendChild(capital);
    pageCountries.appendChild(div);
  })

  console.log(allCountries);
}

//Comparando input com os países da api
function valueCompare(name) {
  const countrieTitle = pageCountries.getElementsByTagName("h2");
  
  for (let i = 0; countrieTitle.length; i++) {
    if (countrieTitle[i] != null) {
      const countrieName = countrieTitle[i].innerText;
      if(name === countrieName) {
        console.log("sucess: " + name);
      } else {
        return
      }
    } else {
      return
    }
  }
}




//Capturando texto enquanto ele é digitado no input
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keyup", (e) => {
  let text = searchInput.value;
  console.log("input: "+ text);
  valueCompare(text);
})





getAllCountries();
