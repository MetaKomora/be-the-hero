const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());


/*
* Tipos de Parâmetros:
*
* Query params: Parâmetros nomeados enviados na roda após o "?"" (Filtros, paginação)
* Route params: Parâmetros utilizados pra identificar recursos (users/1)
* Request body: Corpo da requisição, utilizado pra criar ou alterar recursos
*/


module.exports = app;