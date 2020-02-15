<h1 align="center">
  <img src="./src/assets/img/logo.png" alt="Api rest node.js fastfeet" title="Fastfeet">
  <br>
  FastFeet
</h1>

<h4 align="center">app para uma transportadora fictícia <br>(<strong>em fase de desenvolvimento</strong>)</h4>
<h6 align="center"><small>:octocat:</small></h6>

<p align="center">
 <a href="#mega-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#mega-Pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#mega-Como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
 <a href="#memo-licença">Licença</a>
</p>

## :mega: Tecnologias
 - [ Nodejs ]( https://nodejs.org/en/ )
 - [ Expressjs ]( https://expressjs.com/pt-br/ )
 - [ PostgreSQL ]( https://www.postgresql.org/ )

## :mega: Dependências
 - [ bcryptjs ]( https://www.npmjs.com/package/bcrypt ) 
 - [ express ]( https://www.npmjs.com/package/express )
 - [ jsonwebtoken ]( https://www.npmjs.com/package/jsonwebtoken )
 - [ pg ]( https://www.npmjs.com/package/pg )
 - [ pg-hstore ]( https://www.npmjs.com/package/pg-hstore )
 - [ sequelize ]( https://sequelize.org/ )
 - [ yup ]( https://github.com/jquense/yup ) 

## :mega: Pré-requisitos

  Esse projeto faz uso de algumas tecnoligas de uso obrigario e que são necessarias serem instaldas no sistema. São elas:
  **Nodejs** na versão **12.14.1** ou superior e o **postgreSql**.
  
## :mega: Como Usar

* **Download**
  
  Para fazer o download do projeto abra o **```terminal```** e execute o comando abaixo: 
  ```
  git clone https://github.com/bhyago/Fast-feet.git
  ```
* **Instalando as Dependências** 

  Para instalar as dependências necessarias e gerar a pasta **```node_modules```** execute o comando:
  ```
  yarn
  ```
  
* **Inicialização do Banco de dados**

  Dentro do diretorio *``` ./fastfeet/src/config/database```*, altere os dados de acordo com a configuração do seu bando de dados, exemplo:
  ```JavaScript
  module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'suasenha',
  database: 'fastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  };
  ```

* **Inicialização do servidor**

  Para inicializar o servidor, no terminal execute o comando:
  ```
  yarn dev
  ```
  Se desejar iniciar o servidor juntamente com **```degub```** do **```vscode```**, execute o seguinte comando:
  ```
  yarn dev:degub
  ```
  #### :memo: Licença

  Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

  
 ##### **Feito com :heart: by Hyago Braga**
