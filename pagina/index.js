const myMenu = new Map([
    ["Tábua de frios", 16.00],
    ["Tábua Quente", 19.00],
    ["Porção Batata Frita", 20.00],
    ["Mandioquinha", 15.00],
    ["Isca de Frangos", 25.00],
    ["Porção de contra filé", 38.00],
    ["Porção de Picanha ", 50.00],
    ["Bolinho de Siri", 22.00],
    ["Isca de Peixe", 25.00],
    ["Camarões Fritos", 30.00],
    ["Caranguejo", 38.00],
    ["Coca-cola 600ml", 7.00],
    ["Guaraná Antarctica lata", 6.00],
    ["Fanta Laranja 600ml", 5.00],
    ["Jarra de Suco 1L", 15.00],
    ["brahma 473ml", 5.00],
    ["Corona long neck", 7.00],
    ["Heineken long neck", 9.00],
    ["Ballantine's", 17.00],
    ["Red Label", 14.00],
    ["Royal Salute", 76.00],
    ["Tigela 500ml (2 sabores)", 12.00],
    ["Salada de Frutas doce", 14.00],
])

let carrinho = 0;
let valor; 

const btnTabuaFrio = document.getElementById("tabuaFrios");
console.log(btnTabuaFrio.value);