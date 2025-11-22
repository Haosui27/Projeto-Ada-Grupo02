const { cadastrarCliente } = require("./Arquivos/arquivoCliente");
const { verificarLogin } = require("./VerificaçãoLogin/VerificarLogin");

const prompt = require("prompt-sync")();

//   var cpf = String(prompt("Digite o cpf: "));
//   var nome = String(prompt("Digite o nome completo: "));
//   var saldoInicial = parseFloat(prompt("Digite o valor do deposito inicial: "));

//   cadastrarCliente(cpf, nome, saldoInicial);


async function login() {
  var login = String(prompt("Digite o login: "));
  var senha = String(prompt("Digite a senha: "));

  const verifica = await verificarLogin(login, senha);

  if (verifica === 1) {
    console.log("Menu Gerente");
  } else if (verifica === 2) {
    console.log("Menu Cliente");
  }
  else{
    console.log("Cabra");
  }
}

login();
