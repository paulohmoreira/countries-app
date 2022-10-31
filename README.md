# Countries App

Integração com a API REST Countries para pegar dados de países e exibir em uma página.

Funcionalidades:

- [x] Ver todos os países da API na página principal 
  - [x] Mostrar todos os países na página principal
    - [x] Cada país deve conter: bandeira; nome; qtd população; região; capital;
  - [x] Criar interface para mostrar todos os países.

- [ ] Procurar por um país atráves de um input
  - [x] Capturar nome do país digitado
  - [x] Comparar com o nome que foi pegado na API
  - [x] Fazer comparação a cada letra digitada
  - [x] Mostrar o país encontrado, esconder os outros que não são iguais ao digitado
  - [x] O resultado da pesquisa tem que ir mudando conforme o usuário vai digitando ou apagando o que for digitado


- [ ] Filtro por região
  - [x] Criar select com as opções
  - [x] Capturar filtro selecionado
  - [x] Comparar o filtro selecionado com todos os países
  - [x] Mostrar na interface apenas os países da região selecionada
  - [ ] Corrigir bug: Ao voltar para o default option não está renderizando nenhum páis

- [ ] Clicar em um país para obter informações mais detalhadas
  - [ ] Mostrar todos os detalhes do pais: Native Name; Population; Region; Sub Region; Capital; Top Level Domain; Currencies; Languages.
  - [ ] Abaixo dos detalhes mostrar as Border Countries
  - [ ] Clicar nos países da página de detalhes deve direcionar para o mesmo


- [ ] Refatorar o design para ficar o mais próximo possível ao design que foi proposto
- [ ] Alternar tema entre dark e light mode
