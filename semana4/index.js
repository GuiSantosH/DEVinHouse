const contasClientes = [
    {
    id: 1,
    nome: 'Cliente 01',
    saldo: 500,
    },
    {
    id: 2,
    nome: 'Cliente 02',
    saldo: 3000,
    },
    {
    id: 3,
    nome: 'Cliente 03',
    saldo: 5000,
    },
    ];

var cliente1 = contasClientes[0];
var cliente2 = contasClientes[1];
var cliente3 = contasClientes[2];

const clientes = [
    cliente1,
    cliente2,
    cliente3,
];

const adicionaClientes = (clientes) => {
    clientes.forEach(clientes => {
        let clientesSelector = document.getElementById("contas");
        clientesSelector.innerHTML += `<option>${clientes.nome}</option>`
    });
}

