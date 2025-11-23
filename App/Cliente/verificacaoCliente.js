const { carregarClientes, arquivoCliente } = require("./arquivoCliente");
const fs = require("fs").promises;
const prompt = require("prompt-sync")();

async function verificaSeCliente(usuario, senha) {
  // valida formato de CPF
  if (!/^\d{11}$/.test(usuario)) return null;

  const clientes = await carregarClientes();
  const cliente = clientes.find(c => c.getCpf() === usuario);

  if (!cliente){
    console.log("Usuário inválido! Tente novamente.\n");    
    return null;
  } 

  if (cliente.isPrimeiroAcesso()) {
    await primeiroAcesso(cliente, clientes);
    return null; // força login novamente
  }

  return cliente.getPassword() === senha ? cliente : null;
}

async function primeiroAcesso(cliente, clientes) {
  console.log(`Bem vindo ${cliente.getNome()}! Este é seu primeiro acesso.`);
  let novaSenha;
  do {
    novaSenha = String(prompt("Defina uma senha: "));
  } while (!novaSenha);

  cliente.setSenhaNova(novaSenha);

  await fs.writeFile(
    arquivoCliente,
    JSON.stringify(clientes.map(c => c.toJSON()), null, 2),
    "utf8"
  );

  console.log("Senha definida com sucesso! Faça login novamente.");
}

module.exports = { verificaSeCliente };