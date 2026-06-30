

let nomesAlunos = ["joao", "kauan", "vitor", "fernando", "bruno"]

let notasAlunos = [8.5, 7.0, 9.0, 6.5, 8.0];

let frequenciaAlunos = [80, 75, 80, 95, 85]; 

for (let i = 0; i < nomesAlunos.length; i++){
  console.log("Nomes Alunos:", nomesAlunos[i])
  console.log("Notas Alunos:",notasAlunos[i])
  console.log("Frequencia Alunos:",frequenciaAlunos[i])
  console.log("=====================================================")
}

let somaNotas =  0;

for (let i = 2; i < notasAlunos.length; i++){
    somaNotas = somaNotas + notasAlunos[i];
}

let media = somaNotas / notasAlunos.length;

console.log(media)
  

for (let i = 0; i < nomesAlunos.length; i++) {

  let nome = nomesAlunos[i];
  let nota = notasAlunos[i];
  let frequencia = frequenciaAlunos[i];
  let situacao;

  if (nota >= 7 && frequencia >= 75) {
    situacao = "Aprovado";
  } else if (nota >= 5 && nota < 7 && frequencia >= 75) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

}

let opcao = 3;

switch (opcao) {
    case 1:
             console.log("Lista de alunos:");
        for (let i = 0; i < nomesAlunos.length; i++) {
            console.log(nomesAlunos[i]);
        }
        break;

    case 2:
        let soma = 0;

        for (let i = 0; i < notasAlunos.length; i++) {
            soma += notasAlunos[i];
        }

        console.log("Média geral: " + (soma / notasAlunos.length));
        break;

    case 3:
        console.log("Situação dos alunos:");

        for (let i = 0; i < nomesAlunos.length; i++) {
            if (notasAlunos[i] >= 7 && frequenciaAlunos[i] >= 75) {
                console.log(nomesAlunos[i] + " - Aprovado");
            } else {
                console.log(nomesAlunos[i] + " - Reprovado");
            }
        }
        break;

    case 4:
        console.log("Resumo da turma:");
        console.log("Quantidade de alunos: " + nomesAlunos.length);

        let total = 0;

        for (let i = 0; i < notasAlunos.length; i++) {
            total += notasAlunos[i];
        }

        console.log("Média geral: " + (total / notasAlunos.length));
        break;

    default:
        console.log("Opção inválida!");
}