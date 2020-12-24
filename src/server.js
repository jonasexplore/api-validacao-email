require("dotenv").config();
/**
 * Variável responsável por instanciar o express.
 */
const express = require("express");
/**
 * Variável responsável por permitir a comunicação através de arquivos JSON.
 */
const bodyParser = require("body-parser");
/**
 * Variável responsável por receber as rotas da aplicação.
 */
const router = require("./routes");

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(router);

app.listen(port, () => console.log(`Server has started at port ${port}`));
