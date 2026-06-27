let produto = {
    nome: "televisão",
    preço: 1.500,
    estoque: 8,
    disponivel: "true"

}

console.log(produto.nome);
console.log(produto.preço);
console.log(produto.estoque);
console.log(produto.disponivel);

produto.preço = 1.499;
produto.estoque = 0;
produto.disponivel = "false"

console.log(produto)
