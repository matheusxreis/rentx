### TypeORM

O TypeORM é um módulo, que se trata de um ORM, ou seja, um Object-Relational Mapping.

Se trata de uma técnica para aproximar o paradigma da programação orientada a objetos aos bancos de dados relacionais.

De forma simples, o TypeORM faz o mapeamento do banco de dados para as classes, modelos e repositórios criados na sua aplicação. Dessa forma é possível alterar diretamente o banco de dados com comandos e um código mais próximo da programação orientada a objetos.

Quando instalado o TypeORM, ele possui uma cli para que os comandos possam ser realizados. Caso seja optado por não fazer a instalação dessa de forma global, pode ser usado um script para auxilio:

```json
  "scripts": {
    "typeorm": "ts-node-dev ./node_modules/typeorm/cli"
  },
```

O arquivo de configuração do TypeORM segue o seguinte modelo:

```json
{
"type":"postgres",
"port":5432,
"host":"localhost",
"username":"username",
"password":"password",
"database":"database",
"migrations": ["./src/database/migrations/*.ts"],
"entities": ["./src/modules/**/entities/*.ts"],
"cli": {
    "migrationsDir": "./src/database/migrations"
}
}
```
Sendo a propriedade migrations, onde as migrations serão salvas. A propriedade entities, onde estarão os modelos das tabelas. E a propriedade migrationsDir dentro da cli, onde a cli irá procurar as migrations quando solicitado. 

#### Migrations

As migrations são uma forma de versionar o banco de dados da sua aplicação para que haja um maior controle sobre todos os envolvidos, em todas as máquinas.

Com as migrations você tem controle de todas alterações feitas na sua base de dados. 

Caso você compartilhe um código com um colega referente ao mesmo projeto e banco de dados, e ele adicione alguma tabela nova no banco, basta você rodar um comando do typeorm para puxar todas as atualizações para você.

```bash

yarn typeorm migration:run
```

Para criar uma nova migration:

```bash

yarn typeorm migration:create -n CreateSpecifications
```

 