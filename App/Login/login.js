const prompt = require('prompt-sync')();

let usuario;
let senha;
let validaCpf = false;
let menu;
let cliente = []; // guarda cadastro dos cliente

function voltarMenuGerente() {
    console.log("");
    prompt('Para retornar ao Menu do Gerente, digite "0": ');
    console.clear();
}

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
            
            switch (menu) {
                case "1":
                    let novoCliente = "s";
                    while (novoCliente === "s") {
                        console.clear();
                        console.log("<<< Cadastro de Cliente >>>");
                        console.log(`
                        
                            Informe os seguintes dados: 
                            
                            `);
                        let nome = prompt("Nome: ");
                        let cpf = prompt("CPF (somente números): ");

                        // percorre a lista de cliente para verificar se já existe cadastrado
                        let clienteCadastrado;
                        for (let j of cliente) { // j é uma variável auxiliar
                            if (j.cpf === cpf)  // compara o CPF guardado com o pesquisado
                                clienteCadastrado = true; // retorna verdadeiro se os CPF's forem iguais
                        }

                        if (clienteCadastrado) {
                            console.log(`${nome}, já está cadastrado!`);
                            console.log("");

                            novoCliente = prompt("Deseja cadastrar novo cliente [s / n]: ");
                            if (novoCliente === "n") {
                                voltarMenuGerente();
                                break;
                            }
                            continue; // volta ao começo do cadastro
                        }

                        // parseFloat para reconhecer números decimais (R$ 0.00)
                        let saldoInicial = parseFloat(prompt("Qual será o saldo inicial: R$ "));

                        // inclusão do cliente
                        cliente.push({
                            nome: nome,
                            cpf: cpf,
                            saldo: saldoInicial,
                            extrato: [`Saldo inicial R$ ${saldoInicial.toFixed(2)}`]   // guardar todas as movimentações do extrato (lista/array)
                        });
                        console.clear();
                        console.log(`Cliente ${nome} cadastrado!`);

                        novoCliente = prompt("Deseja cadastrar novo cliente [s / n]: ");
                        if (novoCliente === "n") {
                            voltarMenuGerente();
                            break;
                        }
                    }
                    break;

                case "2":
                    console.clear();
                    console.log("<<< Lista de Clientes >>>");

                    // consulta o comprimento da lista de cliente; quantidade de clientes cadastrado e retorna nenhum cliente se comprimento igual a zero
                    if (cliente.length === 0) {
                        console.log("Nenhum cliente cadastrado.");
                        break;
                    }

                    // percorre a lista de cliente e imprime os valores da propriedade nome e CPF
                    for (let i = 0; i < cliente.length; i++) {
                        console.log(`${i + 1} - Nome: ${cliente[i].nome} | CPF: ${cliente[i].cpf}`);
                    }

                    voltarMenuGerente();
                    break;

                case "3":
                    console.clear();
                    console.log("<<< Pesquisa de Cliente >>>");

                    let pesquisaCliente = prompt(`
                        
                        Informe o CPF: `);

                    // percorre a lista de cliente cadastrado procurando se o valor da propriedade CPF é igual ao solicitado
                    let resultado;
                    for (let j of cliente) { // j é uma variável auxiliar
                        if (j.cpf === pesquisaCliente) {
                            resultado = j;  // guarda o cliente pesquisado 
                        }
                    }

                    // imprime os valores das propriedades do cliente pesquisado
                    console.log(`Nome: ${resultado.nome}`);
                    console.log(`CPF: ${resultado.cpf}`);
                    console.log(`Saldo: R$ ${resultado.saldo.toFixed(2)}`);

                    console.log("Extrato:");
                    // percorre o extrato e imprime as movimentações
                    for (let extrato of resultado.extrato) {
                        console.log(" - " + extrato);
                    }

                    voltarMenuGerente();
                    break;

                case "0":
                    console.clear();
                    console.log("Saindo do Sistema. Volte Sempre!");
                    break;

                default:
                    console.clear();
                    console.log("Opção Inválida. Tente novamente!");
                    break;
            }
        } while (menu !== "0"); //deixei assim para que retorne para o menu até acertar a opção ou digita 0 pra sair
            
    } else {
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
                    break;
                default:
                    console.log("Opção Inválida. Tente novamente!");
                    break;
            }
        } while (menu!=="0"); //deixei assim para que retorne para o menu até acertar a opção ou digita 0 pra sair
    }
} while (console.log("parei aqui"))


 
