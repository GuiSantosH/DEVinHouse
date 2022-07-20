var representaPessoa = (nome, sobrenome, setor, idade) => {
    return {
      nome: nome,
      sobrenome: sobrenome,
      setor: setor,
      idade: idade,
    };
  };

  var pessoa1 = representaPessoa('Guilherme', 'Santos', 'camarote', 18);
  var pessoa2 = representaPessoa('Flavio', 'Silva', 'camarote', 21);
  var pessoa3 = representaPessoa('Lorenz', 'Pontes', 'pista', 21);
  var pessoa4 = representaPessoa('Luan', 'Rodrigo', 'pista', 23);
  var pessoa5 = representaPessoa('Diego', 'Almeida', 'arquibancada', 15);
  var pessoa6 = representaPessoa('Leandro', 'Oliveira', 'arquibancada', 19);

 const listaDeConvidados = [
    pessoa1,
    pessoa2,
    pessoa3,
    pessoa4,
    pessoa5,
    pessoa6,
 ];

function liberarBebidas(lista) {
  var resultado = lista.map((pessoa) => {
    pessoa.openBar = false;
    if (pessoa.idade >= 18) {
      pessoa.openBar = true;
    }
    return pessoa;
  });
return resultado;
}


var separarCamarote = (lista) => {
  var resultado = lista.filter((pessoa) => {
    if (pessoa.setor === "camarote") {
      return true;
    } else {
      return false; 
    }
  });
  return resultado;
};


var separarPista = (lista) => {
  var resultado = lista.filter((pessoa) => {
    if (pessoa.setor === "pista") {
      return true;
    } else {
      return false; 
    }
  });
  return resultado; 
};

var separarArquibancada = (lista) => {
  var resultado = lista.filter((pessoa) => {
    if (pessoa.setor === "arquibancada") {
      return true;
    } else {
      return false; 
    }
  });
  return resultado; 
};

const filtrarPorSetor = (lista, setor) => {

  return lista.filter((conv) => conv.setor === setor);
};

const convidadosComBebidasProcessada = liberarBebidas(listaDeConvidados);

const listaArquibancada = separarArquibancada(convidadosComBebidasProcessada);
const listaCamarote = separarCamarote(convidadosComBebidasProcessada);
const listaPista = separarPista(convidadosComBebidasProcessada);

const ulArquibancada = document.getElementById("arquibancada");
const ulPista = document.getElementById("pista");
const ulCamarote = document.getElementById("camarote");

listaArquibancada.forEach((pessoa) => {
  ulArquibancada.innerHTML += `<li>${pessoa.nome} `+` ${pessoa.sobrenome}</li>`;
});

listaCamarote.forEach((pessoa) => {
  ulCamarote.innerHTML += `<li>${pessoa.nome} `+` ${pessoa.sobrenome}</li>`;
});

listaPista.forEach((pessoa) => {
  ulPista.innerHTML += `<li>${pessoa.nome} `+` ${pessoa.sobrenome}</li>`;
});