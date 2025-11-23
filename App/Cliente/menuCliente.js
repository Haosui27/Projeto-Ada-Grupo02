const { cabecalhoCentralizado } = require("../shared/personalizaPrompt");

const prompt = require("prompt-sync")();

function menuCliente(clienteAtivo) {
  do {
    cabecalhoCentralizado("MENU CLIENTES")
    console.log(` 1 - Consultar saldo atual\n 2 - Realizar depósitos\n 3 - Efetuar saques\n 4 - Fazer transferências\n 5 - Visualizar extrato\n 0 - Sair\n`);

    menu = prompt("Digite a opção desejada: ");

    switch (menu) {
      case "1":
        console.log("Em manutenção. Consultar saldo atual");
        break;
      case "2":
        console.log("Em manutenção. Realizar depósitos");
        break;
      case "3":
        console.log("Em manutenção. Efetuar saques");
        break;
      case "4":
        console.log("Em manutenção. Fazer transferência");
        break;
      case "5":
        console.log("Em manutenção. Visualizar extrato");
        break;
      case "0":
        console.log("Saindo do Sistema. Volte Sempre!");
        break;
      default:
        console.log("Opção Inválida. Tente novamente!");
        break;
    }
  } while (menu !== "0"); //deixei assim para que retorne para o menu até acertar a opção ou digita 0 pra sair
}

module.exports = { menuCliente };