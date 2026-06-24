**1. O que é um array em programação?**  O array pelo que lemos é 
uma estrutura sobre dados que permite armazenar varios valores em uma unica variavel.

**2. Por que é melhor usar um array do que criar várias variáveis separadas, como aluno1, aluno2 e aluno3**? Por que o
array ele organiza os dados em um unico lugar facilitando o acesso "exemplo 
let alunos = ["Ana", "Bruno", "Carlos"];"

**3. O que é índice em um array**? O indice é a posiçao de cada elemento dentro do array. "exemplos
let alunos = ["Ana", "Bruno", "Carlos"];"
| Índice | Valor  |
| ------ | ------ |
| 0      | Ana    |
| 1      | Bruno  |
| 2      | Carlos |


**4. Por que o primeiro elemento de um array fica na posição 0**? Por que a maioria das linguagens sobre programação utiliza a contagem do zero. que facilita os calculos de memoria em acesso aos elementos.

**5. Para que serve o .length**? Ela serve para mostrar a quantidades de elementos  sobre array. "exemplos"
let alunos = ["Ana", "Bruno", "Carlos"];
console.log(alunos.length);
saida: 3

**6. Como acessamos o primeiro elemento de um array chamado alunos**? Usando o indice 0 

let alunos = ["Ana", "Bruno", "Carlos"];

console.log(alunos[0]);

**7. Como podemos alterar um valor dentro de um array**?Basta atribuir um novo valor ao índice desejado. "exemplo"

let alunos = ["Ana", "Bruno", "Carlos"];

alunos[1] = "Beatriz";

console.log(alunos);

SAIDAS:
["Ana", "Beatriz", "Carlos"]

**8. Qual a relação entre arrays e laços de repetição**? Os laços de repetição permitem percorrer todos os elementos de um array automaticamente.

let alunos = ["Ana", "Bruno", "Carlos"];

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

**9. Qual a diferença entre percorrer um array com for e apenas mostrar um item específico**? Mostrar um item específico acessa apenas uma posição.
O for percorre todos os elementos do array.

EXEMPLOS:(console.log(alunos[1]);)

for(let i = 0; i < alunos.length; i++){
    console.log(alunos[i]);
}

**10. O que é um acumulador? Dê um exemplo de uso com notas ou valores**. Um acumulador é uma variável usada para armazenar resultados parciais durante uma repetição.

let notas = [7, 8, 9];
let soma = 0;

for(let i = 0; i < notas.length; i++){
    soma += notas[i];
}

console.log(soma);

SAIDA:24

**11. Para que servem operadores aritméticos como +, -, * e / dentro de um programa**?Servem para realizar cálculos matemáticos.
EXEMPLOS:  
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

**12. Para que servem operadores lógicos como && e ||**? Servem para combinar condições.

if(idade >= 18 && possuiCNH){
    console.log("Pode dirigir");
}

|| (OU): pelo menos uma condição deve ser verdadeira.

if(media >= 7 || recuperacao >= 7){
    console.log("Aprovado");
}


**13. Qual a diferença entre if/else e switch**?if/else é usado para condições mais complexas.
switch é usado quando se deseja comparar uma variável com vários valores específicos.

if(nota >= 7){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}

switch(dia){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
}



**14. O que os métodos push e pop fazem em um array**?

push()
Adiciona um elemento ao final do array.

let alunos = ["Ana", "Bruno"];

alunos.push("Carlos");


["Ana", "Bruno", "Carlos"]

["Ana", "Bruno"]


**15. O que é uma matriz e como ela se relaciona com arrays**?

Uma matriz é um array que contém outros arrays.

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


|   |   |   |
| - | - | - |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
| 7 | 8 | 9 |




console.log(matriz[1][1]);


SAIDA:5

uma matriz é um "array de arrays", permitindo organizar dados em linhas e colunas.
