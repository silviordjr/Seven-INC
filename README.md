# Seven INC

<h4 align="center"> 
Node.Js REST API
</h4>

Projeto de API gerenciamento de RH, realizado para fins didáticos.

### Tecnologias

O projeto foi construído em Node.Js (v16.2.0), fazendo uso das bibliotecas:

- [Cors](https://www.npmjs.com/package/cors)
- [Express](https://expressjs.com/pt-br/)
- [Knex](https://knexjs.org/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Uuid](https://www.npmjs.com/package/uuid)
- [CPF-CNPJ Validator](https://www.npmjs.com/package/cpf-cnpj-validator)
- [TS-NODE](https://www.npmjs.com/package/ts-node)
- [TS-NODE-DEV](https://www.npmjs.com/package/ts-node-dev)

### Autor

Silvio Ribeiro Dias Jr.

-[LinkedIn](https://www.linkedin.com/in/silvio-dias-junior/)

### Para testar o projeto

    npm i

Instala as dependências necessárias para a aplicação.

    Crie um arquivo .env contendo as informações para conexão com o banco de dados e a porta em que a aplicação irá rodar. Exemplo:

    DB_HOST = localhost
    DB_PORT = 3312
    DB_USER = root
    DB_PASSWORD = pass
    DB_NAME = SevenINc
    PORT = 3333

Realiza as configurações necessárias para a aplicação.

    npm run migrations

Crias as tabelas necessárias e as alimenta com dados fictícios.

    npm run start OU npm run dev (para desenvolvimento)

Inicia o servidor na porta especificada no arquivo .env ou, caso não haja especificação, na porta 3333.

### Documentação

<h4 align="center"> 
GET
</h4>

### Get All

    GET {baseURL}/employee
    Query variable: page

Retorna uma lista limitada aos 10 primeiros empregados. A query page controla a paginação. Exemplo: {baseURL}/employee?page=2 retorna a segunda página de empregados.

### Get By ID

    GET {baseURL}/employee/id

Retorna o empregado proprietário da ID especificada no path.

<h4 align="center"> 
POST
</h4>

    POST {baseURL}/employee

    Body: {
            "name": "Carlos",
            "document": "50910400059",
            "email": "carlos@email.com",
            "phone": "(99)123456789",
            "birthDate": "1997-02-16",
            "salary": 13000.76
        }

Cria um empregado com as especificações passadas no body da requisição (name, document, email, phone, birthDate e salary). Para a criação do empregado deve ser passado no campo document um CPF válido e ainda não usado por nenhum empregado; no campo email um email válido; no campo phone um telefone com o formato (ddd)número, onde o número deve ter 8 ou 9 dígitos (exemplo: (99)123456789). Nos campos document, email e phone são realizadas verificações para atestar a validade das informações cadastradas.

<h4 align="center"> 
PUT
</h4>

    PUT {baseURL}/employee/id

     Body: {
            "name": "Carlos",
            "document": "50910400059",
            "email": "carlos@email.com",
            "phone": "(99)123456789",
            "birthDate": "1997-02-16",
            "salary": 13000.76
        }

Altera um empregado com as especificações passadas no body da requisição (name, document, email, phone, birthDate e salary). Todas as especificações do body do POST estão sujeitas a modificação, porém o usuário pode passar apenas as informações que serão alteradas, não havendo a necessidade de passar o body completo. Assim como no endpoint POST, são realizadas verificações para atestar a validade das informações alteradas nos campos document, phone e email.

<h4 align="center"> 
DELETE
</h4>

    DELETE {baseURL}/employee/id

Deleta o empregado proprietário da ID especificada no path.