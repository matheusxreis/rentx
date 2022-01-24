### cURL

Diante do problema de ter apenas 4GB de memória RAM, me vi obrigado a abrir mão de algumas aplicações gráficas utilizadas nesse projeto, dentre elas o Beekeeper Studio, o Postman e/ou Insomnia. 

Referente ao problema do Beekeeper Studio, passei a utilizar o utilitário psql dentro do container do Docker.

Quanto ao fato do Postman e/ou Insomnia, troquei pelo curl. 

O curl é um software via linha de comando para transferência de dados mediante a vários protocolos. 

Segue abaixo os comandos utilizados:

**POST**:

```bash
curl -X POST -d '{"name":"SUV", "description":"Carros de grande porte"}' -H "Content-Type: application/json" http://localhost:3333/categories
```
**POST enviando um file em um formulário**:

```bash
curl -F file=@/tmp/categories.node.rentx  http://localhost:3333/categories/import
```
**GET**:

```bash
curl http://localhost:3333/categories
```