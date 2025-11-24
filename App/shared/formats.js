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

function formatData(dataRecebida) {
  // Recebe a data gravada no arquivo clientes.json
  const data = new Date(dataRecebida);

  // Estiliza para o padrão DD/MM/AAAA e ajusta para o horário de Brasília
  const dataBrasilia = data.toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  return dataBrasilia;
}

module.exports = { formatSaldo, formatCpf, formatData };
