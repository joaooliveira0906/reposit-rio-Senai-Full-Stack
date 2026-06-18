let prioridade= 2;
let sistemaforadoAr= false;
let tempoesperamin=35;
let categoria= "internet";

if(sistemaforadoar || prioridade===3){
    console.log("critico");
}else if(tempoesperamin>30 && prioridade===2){
    console.log("alto");
}else if(prioridade===1){
    console.log("normal");
}else{
    console.log(" em analise");
}

switch(categoria){
    case"login":
        console.log("redefinir senha e validar usuario");
        break ;
    case"internett":
      console.log("verificar cabo, wi-fi e roteador");
      break;
      case "computador":
        console.log("reiniciar máquina e verificar atualizações");
        break;
        case"outro":
        console.log("coletar informações");
        break;
        default:
            console.log("categoria inválida");

      


}
