function calculardesconto(preco:number, percentual : number ):number {
    return preco - (preco * percentual / 100); 
}

console.log(calculardesconto(100,10)); // 90
console.log(calculardesconto(250,20)); //200
console.log(calculardesconto(80,15));  //68
