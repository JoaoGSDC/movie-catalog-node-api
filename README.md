<h1 align="center">
<img width="500" src="https://brandslogos.com/wp-content/uploads/thumbs/nodejs-logo-vector.svg" alt="image" />
  
Projeto Movie Catalog API - Node JS
</h1>

<p align="center">Este é o projeto backend desenvolvido em NodeJS</p>

<hr>

## Sobre o projeto

- Este projeto utiliza-se do Node;
- Utiliza-se de TypeScript
- Utiliza-se da Studio Ghibli films API

## Dependências

- [Node.js](https://nodejs.org/en/)

## Primeiros passos

1. Clone o repositório;
2. Vá para o diretório apropriado (cd movie-catalog-node-api)<br />
3. Digite o comando: npm install
4. Assim que terminar de instalar as dependências do projeto, digite o comando: npm run dev

## Deploy

- Caso tenha interesse, você pode acessar a aplicação no deploy realizado no Netlify: [Deploy](https://joaogsdc-movies-catalog.herokuapp.com/)

## Comandos
- Para realizar o build: npm run build
- Para rodar os testes: npm run test

# Sobre a API
- As rotas disponíveis estão no /movies<br />
-- GET: /<br />
--- Responsável por trazer os filmes de forma páginada<br />
--- Ele trás 10 filmes por vez<br /><br />
-- POST: /<br />
--- Realiza a atualização do banco de dados dos primeiros 50 filmes retirados da Studio Ghibli films API
