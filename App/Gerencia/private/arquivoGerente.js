const { Gerente } = require("../private/Gerente");
const fs = require("fs");
const path = require("path");

const arquivoGerente = path.resolve(__dirname, "../../../ArquivosJSON/gerentes.json")

function carregarGerente() {
  const dados = fs.readFileSync(arquivoGerente, "utf8");
  const lista = JSON.parse(dados);
  return lista.map((obj) => Gerente.fromJSON(obj));
}

module.exports = { carregarGerente, arquivoGerente };
