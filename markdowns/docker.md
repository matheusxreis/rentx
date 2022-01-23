### Docker

O Docker utiliza um sistema de ambientes virtuais individuais, chamados de containers. Os containers são utilizados para rodar aplicações sem que seja necessário baixar necessariamente as dependências na sua máquina. Estes são construídos através de imagens do hub.docker, ou imagens criadas por você.

Essa administração dos containers pode ser feita através de containers individuais, ou através de vários containers simultâneos que até se comunicam entre si. Para essa última é necessário o uso do docker-compose, e criação do arquivo docker-compose.yml;

**Segue alguns comandos importantes:**

- Lidando com um container:

 ```bash

docker ps 
docker ps -a
docker stop
docker start
docker rm

docker logs
docker logs -f

 ```

- Lidando com múltiplos containers, através do docker-compose:

```bash

docker-compose down
docker-compose up 
docker-compose up --force-recreate

docker-compose start
docker-compose stop

```

Vale lembrar, que quando nos referênciamos ao container de algo, ele não está propriamente na nossa máquina. É como se fosse uma máquina a parte, por tanto, não podemos acessar um bando de dados da forma convencional por exemplo.

O acesso ao postgres pelo utilitário psql, normalmente é da seguinte forma:

```bash 
psql -U username database
```

Para acessar o **psql do container**, precisamos fazer da seguinte forma:

```bash
docker exec -it database psql -U reis rentx

```

**Como uma aplicação de fora acessa meu container?**

Uma outra obserção importante, é que eu posso associar uma porta existente na minha máquina ao meu container. Dessa, forma, toda vez que alguém acessar, por exemplo, a porta 5432, estará abrindo uma conexão direta com o meu container.

Seguindo essa lógica, quando eu configuro o TypeORM para lidar diretamente com meu database da porta 5432, fazendo as migrations e todas alterações, assim que ele acessar essa porta, será redirecionado para meu container database e fará todas as atividades ali.

Caso você esteja com um serviço habilitado na porta 5432 e esteja usando ela para o seu container, é necessário desabilitar o serviço.
