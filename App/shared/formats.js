function formatSaldo(obj) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(obj);
}

function formatCpf(obj) {
  let cpf = String(obj).replace(/\D/g, "");

  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatTransacao(obj) {
  return;
}

function formatData() {
  const agora = new Date();
  const dataBrasilia = agora.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });
  console.log(dataBrasilia);
}

module.exports = { formatSaldo, formatCpf, formatData };
