const { Cliente } = require('../Cliente/Cliente');

const fs = require('fs');
const path = require('path');
const arquivoCliente = path.resolve(__dirname, '../../ArquivosJSON/clientes.json');

function cadastrarCliente(cpf, nome, valorInicial) {
  const novoCliente = new Cliente(cpf, nome, valorInicial);

  if (!fs.existsSync(arquivoCliente)) {
    const listaInicial = [novoCliente];
    fs.writeFileSync(arquivoCliente, JSON.stringify(listaInicial, null, 2), 'utf8');
    console.log('Arquivo criado com o primeiro cliente!');
  } else {
    const dados = fs.readFileSync(arquivoCliente, 'utf8');
    const clientes = JSON.parse(dados);

    clientes.push(novoCliente);

    fs.writeFileSync(arquivoCliente, JSON.stringify(clientes, null, 2), 'utf8');
    console.log('Novo cliente cadastrado!');
  }
}

module.exports = { cadastrarCliente, arquivoCliente };