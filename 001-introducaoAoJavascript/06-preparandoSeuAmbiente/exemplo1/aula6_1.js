const nome = "Daniel Porto";
const dataNascimento = "1993-09-28";
const anoAtual = new Date().getFullYear();
const dataNascimentoTipoDate = new Date(dataNascimento);
const momentoAtual = new Date();
let proximoAniversario =
  momentoAtual.getMonth() > dataNascimentoTipoDate.getMonth() ||
  (momentoAtual.getMonth() === dataNascimentoTipoDate.getMonth() &&
    momentoAtual.getDay() >= dataNascimentoTipoDate.getDay())
    ? new Date(`${anoAtual + 1}-09-28`)
    : new Date(`${anoAtual}-09-28`);

const diasAteProximoAniversario = Math.floor(
  (proximoAniversario.getTime() - momentoAtual.getTime()) /
    (1000 * 60 * 60 * 24)
);
console.log(`${nome}, seu próximo aniversário é em ${diasAteProximoAniversario} dias`);
