const clickedCountry = localStorage.getItem('clickedCountry');
const url = "https://restcountries.com/v2/name";

console.log(clickedCountry);

//Pegar pegar país pelo nome na API
async function getCountryByName() {
  const response = await fetch(`${url}/${clickedCountry}?fullText=true`);
  const country = await response.json();
  console.log(country);

  country.map((country) => {
    const countryContainer = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const nativeName = document.createElement("p");
    const population = document.createElement("p");
    const region = document.createElement("p");
    const subRegion = document.createElement("p");
    const capital = document.createElement("p");
    const topLevelDomain = document.createElement("p");
    const currencies = document.createElement("p");
    const languages = document.createElement("p");
    const borders = document.createElement("h3");

    img.src = country.flags.svg;
    title.innerText = country.name;
    nativeName.innerText = country.nativeName;
    population.innerText = country.population;
    region.innerText = country.region;
    subRegion.innerText = country.subregion;
    capital.innerText = country.capital;

    console.log(country.flags.svg)
    console.log(country.name)
    console.log(country.nativeName)
    console.log(country.population)
    console.log(country.region)
    console.log(country.subregion)
    console.log(country.capital)
  })
}

getCountryByName();

