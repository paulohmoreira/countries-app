const btnTheme = document.querySelector(".theme-toggle");

btnTheme.addEventListener("click", function () {
  if(localStorage.getItem('theme') == 'light'){
    setTheme('dark');
  } else {
    setTheme('light');
  }
})

// função para setar o tema no localstorage
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// função para pegar o thema salvo no localstorage
(function () {
  if (localStorage.getItem('theme') === 'light') {
    setTheme('light');
  } else  {
    setTheme('dark');
  }
})();