const fs = require("fs");
const path = require("path");
const prompt = require("prompt-sync")();
const { Cliente } = require("../Cliente/Cliente");

const arquivoGerente = path.resolve(
  __dirname,
  "../../ArquivosJSON/gerentes.json"
);
const { arquivoCliente } = require("../Cliente/arquivoCliente");

// Função para carregar JSON genérico
function carregarJSON(caminho) {
  const dados = fs.readFileSync(caminho, "utf8");
  return JSON.parse(dados);
}

// Função para carregar clientes como instâncias da classe
function carregarClientes(caminho) {
  const dados = fs.readFileSync(caminho, "utf8");
  const clientesJSON = JSON.parse(dados);

  // Usa o método estático fromJSON da classe
  return clientesJSON.map((c) => Cliente.fromJSON(c));
}

async function verificarLogin(usuario, senha) {
  return usuario.length === 3
    ? await verificaSeGerente(usuario, senha)
    : await verificaSeCliente(usuario, senha);
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
  const cliente = clientes.find((c) => c.getCpf() === usuario); // usa método de acesso ou toJSON

  if (!cliente) {
    console.log("Cliente não encontrado!");
    return 0;
  }

  // Primeiro acesso → senha padrão ou null
  if (cliente.isPrimeiroAcesso()) {
    // usa método da classe
    await primeiroAcesso(cliente, clientes);
    return 3;
  }

  // Senha correta
  return cliente.getPassword() === senha ? 2 : 0;
}

async function primeiroAcesso(cliente, clientes) {
  console.log(`Bem vindo ${cliente.getNome()}!
Identificamos que este é o seu primeiro acesso!
`);

  let novaSenha;
  do {
    novaSenha = String(prompt("Defina uma senha: "));
    if (!novaSenha) console.log("A senha não pode ser vazia.");
  } while (!novaSenha);

  cliente.setSenhaNova(novaSenha);

  fs.writeFileSync(
    arquivoCliente,
    JSON.stringify(
      clientes.map((c) => c.toJSON()),
      null,
      2
    ),
    "utf8"
  );
  console.log("Senha definida com sucesso!\nFaça login novamente!");
}

module.exports = { verificarLogin };
