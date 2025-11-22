const prompt = require("prompt-sync")();

function menuCliente() {
  do {
    console.log(`
                ===== MENU CLIENTES =====
                1 - Consultar saldo atual
                2 - Realizar depósitos
                3 - Efetuar saques
                4 - Fazer transferências
                5 - Visualizar extrato
                0 - Sair 
            `);

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

module.exports = {menuCliente};