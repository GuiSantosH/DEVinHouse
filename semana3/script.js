var listaConvidados = [
    { nome: "José", sobrenome: "Carlos" },
    { nome: "Alessandro", sobrenome: "Viana" },
    { nome: "Paula", sobrenome: "Souza" },
    { nome: "Cristian", sobrenome: "Schimit" },
    { nome: "Beatriz", sobrenome: "Viana" },
    { nome: "Fernanda", sobrenome: "Silveira" },
    { nome: "Cláudia", sobrenome: "Torres" },
    { nome: "Augusto", sobrenome: "Cesar" },
    { nome: "Noemi", sobrenome: "Nakamura" },
    { nome: "Pedro", sobrenome: "Lobo" },
  ];


let lista = []

listaConvidados.forEach(name => {
  var itens = name.nome + ' ' + name.sobrenome
  lista.push(itens)
})

for(i in lista) {
  let ul = document.getElementById('nomes')
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(lista[i]))
  ul.appendChild(li)
}

