class Aluno {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }
}
const alunos = [];
const joao = new Aluno('Joao', 5);
const maria = new Aluno('Maria', 6);
const jose = new Aluno('Jose', 7);
const fabio = new Aluno('Fabio', 8);
alunos.push(joao, maria, jose, fabio);

// fazer um filter com nota >= 6 
const mediaMaiorQueSeis = alunos.filter(aluno => aluno.nota >= 6);
console.log(mediaMaiorQueSeis);

// fazer array somente com o nome dos alunos aprovados 
const alunosAprovados = [];
for (let i = 0; i < mediaMaiorQueSeis.length; i++) {
  alunosAprovados.push(mediaMaiorQueSeis[i].nome);
}
console.log(alunosAprovados);