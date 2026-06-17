let nome aluno = "João";
let nota1 = 8;
let nota2 = 7;
let frequencia = 80;
let atividadesEntregues = true;
let estaBloqueado = false;

let media = (nota1 + nota2) / 2;

let aprovado =
  media >= 6 &&
  frequencia >= 75 &&
  atividadesEntregues === true &&
  !estaBloqueado;

let aprovadoDestaque =
  media >= 9 &&
  frequencia >= 60 &&
  !estaBloqueado;

console.log("Nome:", nome);
console.log("Média:", media);
console.log("Frequência:", frequencia + "%");
console.log("Entregou atividades:", atividadesEntregues);

if (aprovadoDestaque) {
  console.log("Situação final: Aprovado por destaque");
} else if (aprovado) {
  console.log("Situação final: Aprovado");
} else {
  console.log("Situação final: Reprovado");
}