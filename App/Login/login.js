const prompt = require('prompt-sync')();

let usuario;
let senha;
let validaCpf = false;
let menu;

do {
    console.log(`
        =====================
        |   BANCO SOLARIS   |
        =====================
    `);
    do {
        usuario = prompt("Digite o CPF (apenas números): ");
        if (isNaN(usuario) && usuario.length < 12 ) {
            console.log("CPF inválido. É necessário ter 11 dígitos numéricos.")
        } else {
            validaCpf = true;
        }
    } while(!validaCpf);

    senha = prompt("Digite a senha: ");

    //verificação da senha
    if (senha ==='adm123') {
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
                    break;
                default:
                    console.log("Opção Inválida. Tente novamente!");
                    break;
            }
        } while (menu!=="0"); //deixei assim para que retorne para o menu até acertar a opção ou digita 0 pra sair
    } else {
        //mostra menu clientes
        do {
            console.log(`
                ===== MENU CLIENTES =====
                1 - Consultar saldo atual
                2 - Realizar depósitos
                3 - Efetuar saques
                4 - Fazer transferência
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
                    break;
                default:
                    console.log("Opção Inválida. Tente novamente!");
                    break;
            }
        } while (menu!=="0"); //deixei assim para que retorne para o menu até acertar a opção ou digita 0 pra sair
    }
} while (console.log("parei aqui"))


 