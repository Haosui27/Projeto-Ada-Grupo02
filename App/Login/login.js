const prompt = require('prompt-sync')();
const { verificarLogin } = require("./VerificaçãoLogin/VerificarLogin");

let menu;
let login = true;

do {
    console.log(`
        =====================
        |   BANCO SOLARIS   |
        =====================
    `);
    let usuario   = prompt("Login: " );
    let senha     = prompt("Senha: ");
    let validacao = verificarLogin(usuario, senha); //trocar pela função de verificação de login que será importada

    //verificação da senha
    if (validacao === 1) {
        //mostra menu gerente
        do {
            console.log(`
                ===== MENU GERENTE =====
                1 - Cadastrar clientes
                2 - Listar clientes 
                3 - Detalhar clientes
                0 - Sair 
            `);

            menu = prompt("Digite a opção desejada: ");
            
            switch(menu) {
                case "1":
                    console.log("Em manutenção. Cadastrar clientes");
                    break;
                case "2":
                    console.log("Em manutenção. Listar clientes");
                    break;
                case "3":
                    console.log("Em manutenção.Detalhar clientes");
                    break;
                case "0":
                    console.log("Saindo do Sistema. Volte Sempre!");
                    login = false
                    break;
                default:
                    console.log("Opção Inválida. Tente novamente!");
                    break;
            }
        } while (menu!=="0"); //deixei assim para que retorne para o menu até acertar a opção ou digita 0 pra sair
    }
    else if(validacao === 2) {
        //mostra menu clientes
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
            
            switch(menu) {
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
                    login = false
                    break;
                default:
                    console.log("Opção Inválida. Tente novamente!");
                    break;
            }
        } while (menu!=="0"); //deixei assim para que retorne para o menu até acertar a opção ou digita 0 pra sair
    }
    else {
        (console.log("Usuário inválido!"))
    };
} while (login === true)


 