let nome = "";
let dataNascimento = "";
const botao = document.getElementById("daysTilBirthday");
const anoAtual = new Date().getFullYear();

function calcularDiasAteAniversario() {
  nome = document.getElementById("name").value;
  dataNascimento = document.getElementById("birthday").value;
  if (!nome.length || !dataNascimento.length) {
    alert("Preencha o seu nome e data de nascimento");
    return;
  }
  const dataNascimentoTipoDate = new Date(dataNascimento);
  const momentoAtual = new Date();
  let proximoAniversario =
    momentoAtual.getMonth() > dataNascimentoTipoDate.getMonth() ||
    (momentoAtual.getMonth() === dataNascimentoTipoDate.getMonth() &&
      momentoAtual.getDay() >= dataNascimentoTipoDate.getDay())
      ? new Date(`${anoAtual + 1}-${dataNascimentoTipoDate.getMonth()}-${dataNascimentoTipoDate.getDay()}`)
      : new Date(`${anoAtual}-${dataNascimentoTipoDate.getMonth()}-${dataNascimentoTipoDate.getDay()}`);

  const diasAteProximoAniversario = Math.floor(
    (proximoAniversario.getTime() - momentoAtual.getTime()) /
      (1000 * 60 * 60 * 24)
  );
  alert(
    `${nome}, seu próximo aniversário é em ${diasAteProximoAniversario} dias`
  );
}

botao.addEventListener("click", calcularDiasAteAniversario);
