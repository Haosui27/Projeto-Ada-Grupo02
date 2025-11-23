const { Cliente } = require('./Cliente');

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

module.exports = { deposito };