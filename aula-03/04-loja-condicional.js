let valorCompra = 180;
let temCupom = true;
let ehAlunoSENAI = false;
let formaPagamento = "pix"; 

if (temCupom || ehAlunoSENAI)
    console.log("Desconto de 10% aplicado.");
else if (valorCompra >= 200)
    console.log("não ganhou frete gratis");
let desconto=0;
switch (formaPagamento)
{    case "pix":
        desconto += valorCompra *0.05;
        break;
    
    case "boleto":
        desconto += valorCompra *0.02;
        break;

    case "cartão de crédito":
        break;
        default:
            console.log("forma de pagamento inválida")


}


         