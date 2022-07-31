import {saudacao} from './saudacao.js' 
import saudacaoEspecial from './saudacao-especial.js' 

console.log(saudacao()); 

console.log(saudacaoEspecial("Guilherme")); 

class Produto { 
    constructor(nome, preco, emEstoque, quantidade){ 
        this.nome = nome; 
        this.preco = preco; 
        this.emEstoque = emEstoque; 
        this.quantidade = quantidade; 
    }
}

class Pedido {  
    constructor(numeroPedido, nomeCliente){
        this.numeroPedido = numeroPedido;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        this.listaProdutos = [];
        this.nomeCliente = nomeCliente;
    }
    }
