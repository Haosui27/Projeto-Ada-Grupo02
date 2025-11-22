const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")();
const { Cliente } = require("../Cliente/Cliente");

const arquivoGerente = path.resolve(
  __dirname,
  "../../ArquivosJSON/gerentes.json"
);
const { arquivoCliente } = require("../Arquivos/arquivoCliente");

// Função para carregar JSON
function carregarJSON(caminho) {
  const dados = fs.readFileSync(caminho, "utf8");
  return JSON.parse(dados);
}

function carregarClientes(arquivoCliente) {
  const dados = fs.readFileSync(arquivoCliente, "utf8");
  const clientesJSON = JSON.parse(dados);

  // Converte cada objeto em instância da classe Cliente
  return clientesJSON.map(c => {
    const cliente = new Cliente(c.cpf, c.nome, c.saldo);
    cliente.setSenhaNova(c.password); // mantém a senha já existente
    return cliente;
  });
}

async function verificarLogin(usuario, senha) {
  if (String(usuario).length === 3) {
    return await verificaSeGerente(usuario, senha);
  } else {
    return await verificaSeCliente(usuario, senha);
  }
}

async function verificaSeGerente(usuario, senha) {
  const gerentes = carregarJSON(arquivoGerente);
  const eGerente = gerentes.find(
    (g) => g.id === usuario && g.password === senha
  );

  if (!eGerente) {
    console.log("Usuário gerente não encontrado!");
    return 0;
  }

  return 1;
}

async function verificaSeCliente(usuario, senha) {
  
  const clientes = carregarClientes(arquivoCliente);
  const cliente = clientes.find(c => c.toJSON().cpf === usuario);

  if (!cliente) {
    console.log("Cliente não encontrado!");
    return 0;
  }

  // Primeiro acesso → senha padrão ou null
  if (cliente.toJSON().password === "1234" || cliente.toJSON().password === null) {
    await primeiroAcesso(cliente, clientes);
    return 0;
  }

  // Senha correta
  return cliente.toJSON().password === senha ? 2 : 0;
}

async function primeiroAcesso(cliente, clientes) {
  console.log(`Bem vindo ${cliente.toJSON().nome}!
Identificamos que este é o seu primeiro acesso!
`);  
  let novaSenha = String(prompt("Defina uma senha: "));

  cliente.setSenhaNova(novaSenha); // ✅ agora funciona

  // Salva todos os clientes novamente no JSON
  fs.writeFileSync(
    arquivoCliente,
    JSON.stringify(clientes.map(c => c.toJSON()), null, 2),
    "utf8"
  );
  console.log("Senha definida com sucesso!\nFaça login novamente!");
}

module.exports = { verificarLogin };