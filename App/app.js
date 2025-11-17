/* Estou fazendo o Menu principal apenas para teste ao rodar o codigo.
Assim que definirmos a versão final do Menu posso adaptar o codigo */

const prompt = require('prompt-sync')({sigint: true});
let clientes = [];

const senhaGerente = 'admin123';




function main() {
    let opcao;
    do {
        console.log('\n$$$ Bem-vindo(a) ao Banco Solaris $$$');
        console.log('1. Acesso do Gerente');
        console.log('2. Acesso do Cliente');
        console.log('3. Sair');
        opcao = prompt('Escolha uma opção: ')

    switch (opcao) {
            case '1':
                // Login do gerente
                const senha = prompt('Informe a senha do gerente: ');
                if (senha === senhaGerente) {
                    menuGerente(); // Só entra no menu se a senha estiver certa
                } else {
                    console.log('Senha incorreta.');
                }
                break;
            case '2':
                const validacliente = prompt('Digite seu CPF: ')
                if (validacliente === '12345678900'){
                    menuCliente();
                } else {
                    console.log('Cliente não cadastrado')
                    
                }
                break;
            case '3':
                console.log('Encerrando o sistema..');
                break;
            default:
                console.log('Opção inválida, escolha outra opção.');
        }
    } while (opcao !== '3');
}


/* Menu do Gerente apenas para teste - sem funcionalidade */
function menuGerente() {
    let opcao;

        do {
            console.log('\n   Menu do Gerente - apenas teste')
            console.log('1. Sair');
            opcao = prompt('Escolha uma opção: ');
    
        switch (opcao) {
            case '1':
                console.log('Saindo')
                break;
        
            default:
                console.log('Opção inválida, tente novamente.');
        }
} while (opcao !=='1');
}



/* Código que será integrado ao projeto será a partir daqui */

/*Codigo a ser ativado apenas quando integrado ao arquivo principal dependendo
do codigo usado no menu de Gerente

function buscarClientePorCPF(cpf) {
    for (let i =0; i < clientes.length; i++) {
        if (clientes[i].cpf === cpf) {
            return clientes[i];
        }
    }
    return null;

} */

            // Definindo variaveis para teste de codigo
        const nome = 'Fulano da Silva'
        const cpf = '12345678900'
        let saldoInicial = '1000'
        saldoInicial = parseFloat(saldoInicial);

        /*definindo variaveis diretamente para teste do codigo pois não foi 
        feito codigo prompt para inserir dados pelo gerente, este codigo
        será removido quando for integrado */
        const cliente = {
            nome: nome,
            cpf: cpf,
            saldo: saldoInicial,
            extrato: [`Saldo inicial de R$${saldoInicial.toFixed(2)}`]

        };

           
        



        
        

function menuCliente() {
    /* console.log('\n   CLIENTE   ');
    const cpf = prompt('Informe seu CPF: '); */
    /* variavel temporaria para teste */
    


    /*Codigo a ser ativado apos a integração ao .js principal
    const cliente = buscarClientePorCPF(cpf); */
     //Função de busca definida antes

    /* Para o caso do cliente não estar cadastrado 
    if (cliente == null) {
        console.log('Cliente não encontrado');
        return; // Retorna para o Menu do Cliente
    } */
    console.log(`\nBem vindo(a) ${cliente.nome}`)
    

    let opção;
    do {
        console.log(`\n   Cliente: ${cliente.nome}   `);
        console.log('1. Ver Saldo');
        console.log('2. Deposito');
        console.log('3. Saque');
        console.log('4. Transferências');
        console.log('5. Extrato');
        console.log('6. Sair');
        opcao = prompt('Escolha uma opção: ');

        switch (opcao) {
            case '1':
                console.log(`Saldo atual: R$${cliente.saldo.toFixed(2)}`);
                break;
            case '2':
                deposito(cliente);
                break;
            case '3':
                saque(cliente);
                break;
            case '4':
                transferencia(cliente);
                break;
            case '5':
                verExtrato(cliente);
                break;
            case '6':
                console.log('Saindo...')
                break;
            default:
                console.log('Opção inválida')
        }
    } while (opcao !== '6');

}


function deposito(cliente) {
    const valor = parseFloat(prompt('Valor do depósito: '));
    if (valor > 0) {
        cliente.saldo = cliente.saldo + valor;
        cliente.extrato.push(`Depósito de R$${valor.toFixed(2)}`);
        console.log('Depósito realizado com sucesso!')
    } else {
        console.log('Valor inválido.')
    }
}

/* Continua....  */
main();
