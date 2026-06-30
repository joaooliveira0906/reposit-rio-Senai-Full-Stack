function verificarMaioridade(idade: number): string {
    if(idade >=18) {
        return "maior idade";
    }
        else{return "menor idade";}
    }

   console.log(verificarMaioridade(20));