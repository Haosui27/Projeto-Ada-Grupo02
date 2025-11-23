const { cadastrarCliente } = require("./cadastrarCliente");

const prompt = require("prompt-sync")();

async function menuGerente(gerenteAtivo) {
  do {
    console.log(`
                ===== MENU GERENTE =====
                1 - Cadastrar clientes
                2 - Listar clientes 
                3 - Detalhar clientes
                0 - Sair 
            `);

    menu = prompt("Digite a opção desejada: ");

    switch (menu) {
      case "1":
        //console.log("Em manutenção. Cadastrar clientes");
        await cadastrarCliente(gerenteAtivo);
        break;
      case "2":
        console.log("Em manutenção. Listar clientes");
        break;
      case "3":
        console.log("Em manutenção.Detalhar clientes");
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

module.exports = {menuGerente};
