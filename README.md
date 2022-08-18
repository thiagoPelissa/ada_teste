# Backend archtecture
Projeto desenvolvido com foco no desenvolvimento NodeJS utilizando o padrão de arquitetura `Hexagonal`
<br>
<b>Nome:</b> `Thiago Pellizzari`

# BANCO MYSQL
O banco utilizado foi o Mysql,rodando em um container separadamente.
<br>
 O script para a criacao(DDL), para criacao da tabela poderia ter sido feito via migrations/sequelize, mas por motivos ditaticos utilizei um arquivo init.sql que na hora de rodar o docker cria a tabela necessaria.

 ### <li>Como Rodar</li>
> cd BACKEND
> <br>
> docker-compose up


# BACKEND
### <li>Como Rodar</li>
> cd BACKEND
<br>
> npm install
<br>
> npm run server


# FRONT
### <li>Como Rodar</li>

> cd FRONT
<br>
> yarn start


<b>OBS:</b> O projeto FRONT não funcionou assim que baixei, tive que fazer as duas alterações abaixo para funcionar. 
1 - Adicionei o arquivo .env com a config abaixo, pois estava dando conflito na versão do webpack.
SKIP_PREFLIGHT_CHECK=true

2 - instalei lib tls abaixo
```
nvm install --lts
```


# Consideracoes

<b>OBS</b>
Esse não é meu github verdadeiro, criei uma conta com outro email no github, pois como tem algumas pessoas que me 
seguem, achei melhor criar outra conta pra não expor muito o código do teste.
Minha conta verdadeira com outros projetos é essa abaixo:<br>
https://github.com/thiagoPelissari