# Countries App

Integração com a API REST Countries para pegar dados de países e exibir em uma página.

Funcionalidades:

- [x] Ver todos os países da API na página principal 
  - [x] Mostrar todos os países na página principal
    - [x] Cada país deve conter: bandeira; nome; qtd população; região; capital;
  - [x] Criar interface para mostrar todos os países.

- [x] Procurar por um país atráves de um input
  - [x] Capturar nome do país digitado
  - [x] Comparar com o nome que foi pegado na API
  - [x] Fazer comparação a cada letra digitada
  - [x] Mostrar o país encontrado, esconder os outros que não são iguais ao digitado
  - [x] O resultado da pesquisa tem que ir mudando conforme o usuário vai digitando ou apagando o que for digitado


- [x] Filtro por região
  - [x] Criar select com as opções
  - [x] Capturar filtro selecionado
  - [x] Comparar o filtro selecionado com todos os países
  - [x] Mostrar na interface apenas os países da região selecionada
  - [x] Corrigir bug: Ao voltar para o default option não estava renderizando nenhum páis
  - [x] Corrigir bug: Uncaught TypeError: Cannot read properties of undefined (reading 'style') que foi gerado ao resolver a etapa anterior

- [x] Clicar em um país para obter informações mais detalhadas
  - [x] Criar página básica que vai mostrar o país de forma detalhada
  - [x] Criar botão "voltar para página principal
  - [x] Deixar a div do país 'clicável'
  - [x] Capturar elemento (div countrie-container) que foi clicado
  - [x] Abrir a página criada ao clicar
  - [x] Salvar nome do país clicado no localstorage (ainda não sei um jeito melhor de pegar essa váriavel por outra página)
  - [x] Capturar nome do pais clicado pelo localstorage na outra página que ira fazer outra chamada na API
  - [x] Fazer chamada na API apenas para o país capturado no localstorage
  - [x] Corrigido bug na chamada à API (estava buscando também os que tinham nome parecido)
  - [x] Capturar os seguintes dados do país selecionado: Native Name; Population; Region; Sub Region; Capital; 
  - [x] Capturar os dados: Top Level Domain; Currencies; Languages.
  - [x] Renderizar página com os detalhes do pais
  - [x] Capturar os dados de Borders
  - [x] Abaixo dos detalhes mostrar as Border Countries
  - [x] Pegar o país pela url e retirar a função que fazia pelo localstorage
  - [x] Clicar nos países da página de detalhes deve direcionar para o mesmo

- [ ] Quando filtro de região estiver selecionado, a barra de pesquisa deve funcionar de acordo com o filtro, pesquisando somente países daquele filtro específico

- [ ] Refatorar o design para ficar o mais próximo possível ao design que foi proposto
  - [ ] Mobile
    - [x] Criar e estilizar o header
    - [x] Melhorar design do input
    - [x] Melhorar design do select
    - [x] Melhorar design dos cards dos países
    - [x] Melhorar desing do botão back (pág country.html)
    - [x] Melhorar design da pág country.html
    - [x] Adicionar box-shadow no header das duas páginas
  - [ ] Desktop
    - [ ] Ajustar layout desktop com as media queries

- [ ] Alternar tema entre dark e light mode