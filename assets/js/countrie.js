const clickedCountrie = localStorage.getItem('clickedCountrie');
const url = "https://restcountries.com/v3.1/name/";

console.log(clickedCountrie);

//Pegar pegar país pelo nome
async function getCountrieByName() {
  const response = await fetch(url + clickedCountrie);
  const allCountries = await response.json();
  console.log(allCountries);
}

getCountrieByName();