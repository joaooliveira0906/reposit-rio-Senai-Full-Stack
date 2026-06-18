let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix"; 

if (temCupom || ehAlunoSENAI)
    console.log("Desconto de 10% aplicado.");
else if (valorCompra >= 200)
    console.log("não ganhou frete gratis");

switch (formaPagamento)
{    case "pix":
        