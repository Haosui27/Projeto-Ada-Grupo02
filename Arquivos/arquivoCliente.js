const fs = require('fs');
const caminhoArquivo = 'clientes.json';

function cadastrarCliente(cpf, nome, valorInicial) {
  const novoCliente = {
    cpf,
    nome,
    saldo: valorInicial
  };

  if (!fs.existsSync(caminhoArquivo)) {
    const listaInicial = [novoCliente];
    fs.writeFileSync(caminhoArquivo, JSON.stringify(listaInicial, null, 2));
    console.log('Arquivo criado com o primeiro cliente!');
  } else {
    const dados = fs.readFileSync(caminhoArquivo);
    const clientes = JSON.parse(dados);

    clientes.push(novoCliente);

    fs.writeFileSync(caminhoArquivo, JSON.stringify(clientes, null, 2));
    console.log('Novo cliente cadastrado!');
  }
}