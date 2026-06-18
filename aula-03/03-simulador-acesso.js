let idade = 17;
let temResponsavel = true;
let bloqueado = false;
let temCadastro = true;

if (bloqueado) {
    console.log("Acesso negado: usuário bloqueado.");
} else if (idade >= 18 && temCadastro) {
    console.log("Acesso liberado.");
} else if (idade < 18 && temCadastro && temResponsavel) {
    console.log("Acesso liberado com responsável.");
} else if (!temCadastro) {
    console.log("Acesso negado: cadastro necessário.");
} else {
    console.log("Acesso negado.");
}

console.log'Idade:', idade);
console.log('Tem responsável:', temResponsavel);
console.log('Bloqueado:', bloqueado);
console.log('Tem cadastro:', temCadastro);