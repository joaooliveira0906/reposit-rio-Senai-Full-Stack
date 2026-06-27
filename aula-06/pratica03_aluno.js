let jogador = {
    nickname: "Joao",
    nivel: 1,
    moedas: 100,
    energia: 80,
    premium: false
};

// Estado inicial
console.log("Estado inicial:", jogador);

// Evolução do jogador
jogador.nivel = 2;      // subiu de nível
jogador.moedas = 150;   // ganhou moedas
jogador.energia = 60;   // gastou energia
jogador.premium = true; // virou premium

// Estado final
console.log("Estado final:", jogador);