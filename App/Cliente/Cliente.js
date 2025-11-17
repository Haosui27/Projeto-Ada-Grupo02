class Cliente {
    #cpf;
    #nome;
    #saldoInicial;

    constructor(cpf, nome, saldo) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#saldoInicial = saldo;
    }

    CadastrarCliente(){
        const novoCliente = new Cliente();
        return novoCliente;
    }
}