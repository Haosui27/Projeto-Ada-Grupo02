function cabecalhoCentralizado(texto) {
  const largura = process.stdout.columns || 80; // largura do terminal
  const linha = "=".repeat(largura);            // linha superior/inferior

  // calcula espaços para centralizar
  const espacos = Math.max(0, Math.floor((largura - texto.length) / 2));
  const textoCentralizado = " ".repeat(espacos) + texto;

  console.log(linha);
  console.log(textoCentralizado);
  console.log(linha);
}

module.exports = { cabecalhoCentralizado };