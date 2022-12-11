// Extrai a lógica de fazer a requisição dos "countries" em uma função (princípio da responsabilidade única).
async function getCountry(url) {
  try {
    const response = await fetch(url);
    const country = await response.json();

    if (country.constructor.name === 'Array') return country[0];

    return country;
  } catch (error) {
    console.log(error);
  }
}

// Mesma coisa aqui -> (princípio da responsabilidade única)
function countryInfoElementsHandler(country) {
  let topLevelDomain = [];
  let currencies = [];
  let languages = [];
  let borders = [];

  country.topLevelDomain.map((element) => {
    topLevelDomain += `<span class="inline-block">${element}</span>`;
  });

  country.currencies.map((element) => {
    currencies += `<span class="inline-block">${element.name}</span>`;
  });

  country.languages.map((element) => {
    languages += `<span class="inline-block">${element.name}</span>`;
  });

  // TRY/CATCH é mais utilizando em requisições com API's. Nesse trecho abaixo,
  // o mais correto apenas garantir que existe valores no "country.borders"
  if (country?.borders?.length) {
    country?.borders?.map((element) => {
      borders += ` <button class="btn">${element}</button> `;
    });
  } else {
    borders = '<p>This country have no border countries!</p>';
  }

  return {
    topLevelDomain,
    currencies,
    languages,
    borders,
  };
}

function renderCountryDocument(country) {
  const { topLevelDomain, currencies, languages, borders } =
    countryInfoElementsHandler(country);

  // Isso aqui talvez fiquei mais dificil de pegar a visão, mas a intenção é deixar dinâmico a geração dos dados do "country".
  // Isso melhora a "manutenibilidade", pois, se eu quiser adicionar/remover algum item, é só modificar o objeto.
  const leftData = [
    {
      label: 'Native Name',
      value: country.nativeName,
    },
    {
      label: 'Population',
      value: handlePopulationNumber(country.population),
    },
    {
      label: 'Region',
      value: country.region,
    },
    {
      label: 'Sub Region',
      value: country.subregion,
    },
    {
      label: 'Capital',
      value: country.capital,
    },
  ];

  // O mesmo aqui.
  const rigthData = [
    {
      label: 'Top Level Domain',
      value: topLevelDomain,
    },
    {
      label: 'Currencies',
      value: currencies,
    },
    {
      label: 'Languages',
      value: languages,
    },
  ];

  // Note que agora os dados do "country" agora estão dinâmicos. Dessa forma, também evitei repetição de código "html".
  document.querySelector('.flex-container').innerHTML = `
    <img src="${country.flags.svg}" alt="country Image">
    <div class="country-text">
      <h3>${country.name}</h3>
      <div class="info">
        <div class="left">
          ${leftData
            .map(
              (detail) =>
                `<p class="details"><span class="strong">${detail.label}: </span> ${detail.value}</p>`
            )
            .join('')}
         </div>
         <div class="right">
          ${rigthData
            .map(
              (detail) =>
                `<p class="details"><span class="strong">${detail.label}: </span> ${detail.value}</p>`
            )
            .join('')}
         </div>
        </div>
        <div class="border-container">
          <h5>Border Countries:</h5>
          <div class="borders" id="borders">
            ${borders}
          </div>
        </div>
    </div>`;
}

// Bom, essa função aqui ficou sendo a responsável por lidar com toda a lógica do "country". É a principal desse fluxo.
// Note que agora, ela consegue lidar tanto com "getCountryByName" e "getCountryByAlphaCode",
// evitando repetição de código (DRY - Dont Repeat Yourself)
async function countryHandler(url) {
  const country = await getCountry(url);

  renderCountryDocument(country);
  getClickedBorder();
}

function getClickedBorder() {
  const button = document.querySelectorAll('button');
  const divContainer = document.querySelector('.flex-container');
  // Aqui eu internalizei essas variáveis [baseAlphaUrl] que só são usadas neste escopo da função.
  const baseAlphaUrl = 'https://restcountries.com/v2/alpha';

  button.forEach((element) => {
    element.addEventListener('click', () => {
      divContainer.innerHTML = '';
      countryHandler(`${baseAlphaUrl}/${element.innerText}`);
    });
  });
}

// Função para tratar formato do valor da população
function handlePopulationNumber(population) {
  return population.toLocaleString('en-US');
}

(function () {
  const baseUrl = 'https://restcountries.com/v2/name';
  // Aqui também eu internalizei essas variáveis [urlSearchParams e countryName] que só são usadas neste escopo da função.
  const urlSearchParams = new URLSearchParams(window.location.search);
  const countryName = urlSearchParams.get('name');

  countryHandler(`${baseUrl}/${countryName}?fullText=true`);
})();
