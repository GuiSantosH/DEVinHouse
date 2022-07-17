var representaPessoa = (nome, sobrenome, setor, idade) => {
    return {
      nome: nome,
      sobrenome: sobrenome,
      setor: setor,
      idade: idade,
    };
  };

  var pUm = representaPessoa('Guilherme', 'Santos', 'camarote', 18);
  var pDois = representaPessoa('Flavio', 'Silva', 'camarote', 21);
  var pTres = representaPessoa('Lorenz', 'Pontes', 'pista', 21);
  var pQuatro = representaPessoa('Luan', 'Rodrigo', 'pista', 23);
  var pCinco = representaPessoa('Diego', 'Almeida', 'arquibancada', 15);
  var pSeis = representaPessoa('Leandro', 'Oliveira', 'arquibancada', 19);

 