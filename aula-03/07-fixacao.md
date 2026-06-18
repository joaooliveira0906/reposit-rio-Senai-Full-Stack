1. **Qual é a diferença entre condição e decisão**?
Condição é o teste. Decisão é o resultado do teste.

2. **Por que a ordem dos else if pode mudar o resultado**?
Porque o programa executa a primeira condição verdadeira.

3. **Quando é melhor usar switch?**
Quando existem várias opções para a mesma variável.

4. **O que acontece se esquecer o break?**
Os próximos casos serão executados também.

5. **Qual foi o erro mais comum encontrado?**
Esquecer operadores ou usar condições erradas.






let nota = 9;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovado");
}

erro: a condição maior estava depois da menor


let dia = 2;

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    default:
        console.log("Inválido");
}

erro: faltava break.


let idade = 18;

if (idade === 18) {
    console.log("Tem 18 anos");
}

erro: foi usado = em vez de ===.