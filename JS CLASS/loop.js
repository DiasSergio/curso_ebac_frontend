let nome = [`Maria`, `Joao`, `José`]

console.log(nome)

// Aprendendo o método FOR 

for (let i = 0; i < nome.length; i++) {
    console.log(`O nome é: ` + nome[i])
}

let saudacoes = 0
while (saudacoes < nome.length) {
    console.log(`Olá ` + nome[saudacoes])
    saudacoes++
}

