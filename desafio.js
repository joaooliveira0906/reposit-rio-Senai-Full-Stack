let nome = "João";
let peso = 100;
let altura = 1.83;
let imc = peso / (altura * altura);
let classificacao = "";

if(imc < 18.5) { 
    classificacao = "Abaixo do peso";
} else if(imc >= 18.5 && imc < 24.9) { 
    classificacao = "Peso normal";
} else if(imc < 30) {
    classificacao = "Sobrepeso";
} else {
    classificacao = "Obesidade";
}

console.log("Nome: " + nome);
console.log("imc: " + imc.toFixed(2));
console.log("Classificação: " + classificacao);
