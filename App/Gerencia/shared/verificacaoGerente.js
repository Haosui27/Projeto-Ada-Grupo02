const { carregarGerente } = require("../private/arquivoGerente");

function verificaSeGerente(usuario, senha) {
  const gerentes = carregarGerente();
  const gerente = gerentes.find(
    g => g.getId() === usuario && g.getPassword() === senha
  );

  if(!gerente){
    console.log("Usuário inválido! Tente novamente.\n");
    return null
  }

  return gerente;
}

module.exports = { verificaSeGerente };
