function apresentandoAlguem() {
    let nome = "Sergio"

    function saudacao() {
        console.log(`Olá, ${nome}!`)
    }

    function despedida() {
        console.log(`Até mais, ${nome}!`)
    }

    return {
        // definir o retorno, como será acessado na declaracao
        oi: saudacao,
        tchau: despedida
    }
}

const pessoa = apresentandoAlguem()

pessoa.oi()
pessoa.tchau()
