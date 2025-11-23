const { carregarGerente } = require("./arquivoGerente");

function verificaSeGerente(usuario, senha) {
  const gerentes = carregarGerente();
  const gerente = gerentes.find(
    g => g.getId() === usuario && g.getPassword() === senha
  );
  return gerente || null;
}

module.exports = { verificaSeGerente };
