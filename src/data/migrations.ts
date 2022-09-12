import connection from "./Connection"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
create table if not exists employee (
    id varchar(257) primary key,
    name varchar(257) not null,
    document varchar (11) not null,
    email varchar(257) not null,
    phone varchar(13) not null,
    birth_date date not null,
    salary numeric not null,
    created_at date not null
    );
    
`)
    .then(() => { console.log("Tabelas criadas") })
    .catch(printError)

createTables() 