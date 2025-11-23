// arquivoCliente.js
const { Cliente } = require("./Cliente");
const fs = require("fs").promises;
const path = require("path");

const arquivoCliente = path.resolve(__dirname, "../../ArquivosJSON/clientes.json");

// Função para salvar cliente no JSON
async function salvarCliente(cliente) {
  try {
    let clientes = [];
    try {
      const dados = await fs.readFile(arquivoCliente, "utf8");
      clientes = JSON.parse(dados);
    } catch {
      // arquivo não existe ou está vazio → começa lista vazia
    }

    clientes.push(cliente.toJSON());
    await fs.writeFile(arquivoCliente, JSON.stringify(clientes, null, 2), "utf8");
    console.log("Cliente cadastrado com sucesso!");
  } catch (err) {
    console.error("Erro ao salvar cliente:", err.message);
  }
}

// Função para carregar clientes do JSON e transformar em instâncias da classe Cliente
async function carregarClientes() {
  try {
    const dados = await fs.readFile(arquivoCliente, "utf8");
    if (!dados.trim()) return [];
    const lista = JSON.parse(dados);
    return lista.map(obj => Cliente.fromJSON(obj));
  } catch {
    return []; // se arquivo não existir ou erro de leitura
  }
}

module.exports = { salvarCliente, carregarClientes, arquivoCliente };