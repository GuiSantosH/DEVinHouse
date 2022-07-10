var ano = prompt("Digite o ano de seu nascimento");
var data = new Date();
var anoAtual = data.getFullYear();

var diferenca = anoAtual -  ano;

alert("Sua idade atual é " + diferenca + " anos");