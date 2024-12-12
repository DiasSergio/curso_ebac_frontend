class Endereco {
    constructor(cidade, estado, pais) {
        this.cidade = cidade;
        this.estado = estado;
        this.pais = pais;
    }

    exibirDetalhes() {
        return `Cidade de ${this.cidade}, estado ${this.estado}, país ${this.pais}`
    }
}

class CasaNova extends Endereco {
    constructor(cidade, estado, pais, ano) {
        super(cidade, estado, pais);
        this.ano = ano;
    };

    exibirDetalhesCasaNova() {
        return console.log(`${this.exibirDetalhes()} do ano de ${this.ano}`)
    };
};

class Apartamento extends Endereco {
    constructor(cidade, estado, pais, tipo) {
        super(cidade, estado, pais);
        this.tipo = tipo
    };

    exibirDetalhesApartamento() {
        return console.log(`${this.exibirDetalhes()} e do tipo ${this.tipo}`)
    };
};

const ap1 = new Apartamento('Gramado', 'RS', 'Brasil', "Apartamento");
ap1.exibirDetalhesApartamento();

const casaNova1 = new CasaNova('Canela', 'RS', 'Brasil', 2025);
casaNova1.exibirDetalhesCasaNova();

const ap2 = new Apartamento('POA', 'RS', 'Brasil', 'Apartamento');
ap2.exibirDetalhesApartamento();