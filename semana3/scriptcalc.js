var numeroUm = prompt('Informe o primeiro numero da sua operação');
var numeroDois = prompt('Informe o segundo numero de sua operação');
var operador = prompt('Informe o operador de sua operação');

function operacao(){
    switch(operador){
        case "+":
            var soma = +numeroUm + +numeroDois;
            return console.log(soma);
        case "-":
            var subtracao = +numeroUm - +numeroDois;
            return console.log(subtracao);
        case "*":
            var multiplicacao = +numeroUm * +numeroDois;
            return console.log(multiplicacao);
        case "/":
            var divisao = +numeroUm / +numeroDois;
            return console.log(divisao);
        default:
            console.log("Nenhum valor inserido");
            return 0;
    }
}

operacao();
