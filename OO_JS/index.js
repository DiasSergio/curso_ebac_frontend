class Carro {
    constructor(marca, modelo, ano, km) {
        this.km = km;
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }


    getKm() {
        let _km = this.km
        return _km
    }

    setKm(km) {
        if (typeof km === number) {
            _km = km
        }
    }

    exibirDetalhes() {
        return `Veiculo marca ${this.marca}, modelo ${this.modelo} e ano ${this.ano}`
    }
}

// herdeiro 1 
class Esportivo extends Carro {
    constructor(marca, modelo, ano, km, tipo) {
        super(marca, modelo, ano, km);
        this.tipo = tipo
    }

    exibirDetalhesEsportivo() {
        return console.log(`${this.exibirDetalhes()}, tipo ${this.tipo}`)
    }
}

// herdeiro 2 
class Suv extends Carro {
    constructor(marca, modelo, ano, km, offroad) {
        super(marca, modelo, ano, km);
        this.offroad = offroad
    }

    exibirDetalhesSuv() {
        return console.log(`${this.exibirDetalhes()}, offroad: ${this.offroad}`)
    }
}


// polimorfismo 
class ChecaCarroNovo extends Carro {
    constructor(marca, modelo, ano, km, estado) {
        super(marca, modelo, ano, km);
        this.estado = estado
    }

    checaEstado() {
        if (this.getKm() === 0) {
            return this.estado = "Novo"
        } else {
            return this.estado = "Usado"
        }
    }
}

const carro1 = new ChecaCarroNovo('Ford', 'Fusion', 2024, 12000)
carro1.checaEstado()
console.log(carro1)

const carro2 = new ChecaCarroNovo('VW', 'Amarok', 2022, 25000)
carro2.checaEstado()
console.log(carro2)

const carro3 = new Suv('VW', 'Tiguan', 2025, 0, true)
carro3.exibirDetalhesSuv()