let idade= 16;
let temingresso = true;
let ehalunosenai = true;
let horachegada = 19;
let vagasdisponiveis = 5;
let codigoingresso = "padrao";

let decisao = "";

if(idade <14) {
decisao="entrada negada";
} else if (!temingresso){
    decisao = "precisa comprar ingresso";
} else if(vagasdisponiveis <=o){
    decisao = "evento lotado" ;
}else if (horachegada > 20) {
    decisao = "entrada encerrada";
}else{
    decisao = "entrada liberada";

}
switch (codigoingresso) {
        case "vip":
    console.log ("ingresso vip");
    break;
    case "padrao": // or "padrão" if you want the accent :
    console.log("ingresso padrão");
    if (ehalunosenai){
            console.log ("beneficio para aluno senai");
    }
    break;
case "convidado":
     console.log("ingresso convidado ");
    break;
default:
    console.log("ingresso invalido");
    
    }