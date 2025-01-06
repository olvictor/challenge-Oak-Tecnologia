# Challenge Oak Tecnologia

Este projeto é uma aplicação simples para cadastro e listagem de produtos. Foi criado utilizando o Vite, um moderno bundler que oferece uma experiência de desenvolvimento rápida e eficiente. Os dados dos produtos são salvos localmente no navegador, utilizando o localStorage.

## Funcionalidades

1. **Cadastro de Produtos:**
   - Nome do produto (campo de texto).
   - Descrição do produto (campo de texto).
   - Valor do produto (campo numérico).
   - Disponível para venda (campo com opções: "sim" / "não").

2. **Listagem de Produtos:**
   - Exibe uma tabela com nome e valor dos produtos cadastrados.
   - Ordenação da lista de produtos por valor, do menor para o maior.
   - Ao cadastrar um novo produto, a listagem é atualizada automaticamente.
   
3. **Botão de Cadastro:**
   - Existe um botão na listagem que permite cadastrar novos produtos.

## Tecnologias Utilizadas

- **Vite:** Ferramenta de build para JavaScript moderna e rápida.
- **React:** Biblioteca JavaScript para a construção de interfaces de usuário.
- **CSS:** Estilos básicos para a interface do projeto.
- **localStorage:** Para armazenar os dados dos produtos de forma persistente no navegador.

## Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter os seguintes itens instalados no seu computador:
- [Node.js](https://nodejs.org/) (versão 14 ou superior).
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) como gerenciador de pacotes.

### Passo a Passo

#### 1. Navegue até o diretório do projeto

No terminal, navegue até a pasta onde deseja criar o projeto e execute o seguinte comando:

```bash
cd cadastro-produtos
````
#### 2. Instale as dependências do projeto

```bash
npm install
````
#### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
````

Após isso, o Vite irá iniciar o servidor e você pode acessar a aplicação no navegador, normalmente em http://localhost:5173.

#### 4. Estrutura do Projeto

```bash
├── public/              # Arquivos estáticos (ícones, imagens, etc.)
├── src/                 # Código-fonte da aplicação
│   ├── assets/          # Imagens e outros recursos
│   ├── components/      # Componentes reutilizáveis
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Arquivo de entrada
├── index.html           # Arquivo HTML principal
└── package.json         # Arquivo de configuração do npm
````
#### 5. Funções Principais
- Cadastro de Produtos:

A tela de cadastro contém um formulário com os campos: nome, descrição, valor e a opção de Disponível para venda.
O botão de "Cadastrar" irá salvar as informações no localStorage e redirecionar para a lista de produtos.

- Listagem de Produtos:

Após o cadastro de um produto, ele será adicionado à lista que é exibida na tela.
A listagem é ordenada por valor do produto, do menor para o maior.

- Armazenamento Local:

Os produtos são armazenados no localStorage para garantir que os dados não sejam perdidos após a atualização da página.

- Ordenamento dos items:

Para que os produtos sejam ordenados pelo valor basta clicar na thead "Preço".
<br>
Para que os produtos sejam ordenados pela ordem alfabética basta clicar na thead "Produto".
