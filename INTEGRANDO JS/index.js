const form = document.getElementById(`form-deposito`)

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(` `)
    return nomeComoArray.length >= 2
    //aqui vai retornar um boolean
}

form.addEventListener(`submit`, function (e) {
    e.preventDefault()

    const numeroConta = document.getElementById('conta-deposito')
    const valorDeposito = document.getElementById('valor-deposito')
    const nomeBeneficiario = document.getElementById(`nome-beneficiario`)
    const mensagemSucesso = "Depósito no valor de " + valorDeposito.value + ", efetuado na conta número: " + numeroConta.value + ". Obrigado, " + nomeBeneficiario.value + "."

    let formValido = false
    formValido = validaNome(nomeBeneficiario.value)

    //com ternário 
    formValido ? (
        alert(mensagemSucesso),
        numeroConta.value = "",
        valorDeposito.value = "",
        nomeBeneficiario.value = "",
        document.getElementById('descricao').value = "",
        document.getElementById('agencia-deposito').value = ""
    ) :
        alert(`Insira seu nome completo!`)
})

