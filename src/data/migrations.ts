import connection from './Connection'

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createUsers = () => connection.raw(`
insert into employee (id, name, document, email, phone, birth_date, salary, created_at)
values('1b95f345-fd83-47ca-b577-22dcbd3b50f1', 'Ana Silva', '39339356012', 'ana.silva@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('48140bc8-890b-476f-a6be-573336178dfb', 'Lucas', '99882002005', 'lucas@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('49f3ca57-ddf8-42ab-b365-979e8ad08dbe', 'Cassio Ramos', '80880598018', 'cassio@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('4d091590-0daf-44d1-92d7-3f2e5f121bef', 'Anders Silva', '17219687095', 'anders.silva@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('5ffd4884-57a9-44a5-9ca1-15c4585036da', 'João', '00219690006', 'joao@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('818707f5-5134-45f5-9deb-52f74b5f69cd', 'Maria', '46293585011', 'maria@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('9332ac19-14ed-4758-8dcb-72758f3d4c7f', 'Cicrano da Silva', '88952801059', 'cicrano@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('b1a6a5c4-e093-4b34-ac6e-c8a007c0db88', 'Silvio Dias', '98057056096', 'silvio@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('c5e63814-4eff-4065-8fe2-5c9fd7f9b372', 'Felisberto Alves', '75451103070', 'felisberto@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('c9d17327-2d9b-4911-82f8-2cedd561aaaa', 'Ana Alves', '66520091022', 'ana@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('d587f01e-fe3f-4f2b-a69e-0d7cd56b8f65', 'Andre', '28188099082', 'andre@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12'),
('e9831ea5-5750-42d5-bd62-752cf6840da5', 'Carlos', '50910400059', 'carlos@empresa.com', '(99)999999999', '1997-02-16', 2500, '2022-09-12');`)
.then(() => console.log('usuários criados'))
.catch(() => printError)

const createTables = () => connection.raw(`
create table if not exists employee (
    id varchar(257) primary key,
    name varchar(257) not null,
    document varchar (11) not null,
    email varchar(257) not null,
    phone varchar(13) not null,
    birth_date date not null,
    salary float not null,
    created_at date not null
    );    
`)
    .then(() => { 
        console.log('Tabelas criadas')
        createUsers() 
    })
    .catch(printError)

createTables() 