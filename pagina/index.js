const myMenu = new Map([
    ["Tábua de frios", 16.00],
    ["Tábua Quente", 19.00],
    ["Porção Batata Frita", 20.00],
    ["Mandioquinha", 15.00],
    ["Isca de Frangos", 25.00],
    ["Porção de contra filé", 38.00],
    ["Porção de Picanha", 50.00],
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
//let searchArray = ["tábua de frios", "tabua de frios", "tábua quente", "tabua quente", "porção batata frita", "mandioquinha", "isca de frangos", "porção de contra filé", "porção de picanha", "bolinho de siri", "isca de peixe", "camarões fritos", "caranguejo", "coca-cola", "guaraná antarctica", "fanta laranja", "jarra de suco", "suco", "brahma", "corona ", "heineken", "whisky", "sorvete"]
 
function searchBtn() {
    let pesquisa = document.getElementById("searchInput").value;
     
    if (pesquisa == "") {
        alert("Por favor digite o que deseja procurar!");
    } else if (pesquisa == "tábua de frios" || pesquisa == "tabua de frios") {
        alert();
    } else if (pesquisa == "tábua quente" || pesquisa == "tabua quente") {
        alert();
    } else if (pesquisa == "porção batata frita") {
        alert();
    } else if (pesquisa == "mandioquinha" || pesquisa == "mandicoca" || pesquisa == "Mandioca") {
        alert();
    } else if (pesquisa == "porção de contra filé") {
        alert();
    } else if (pesquisa == "porção de picanha") {
        alert();
    } else if (pesquisa == "bolinho de siri") {
        alert();
    } else if (pesquisa == "isca de peixe") {
        alert();
    } else if (pesquisa == "camarões fritos" || pesquisa == "camaroes fritos") {
        alert();
    } else if (pesquisa == "caranguejo" || pesquisa == "carangueijo" || pesquisa == "Caranguejo") {
        alert();
    } else if (pesquisa == "coca-cola" || pesquisa == "refrigerante" || pesquisa == "Refrigerante") {
        alert();
    } else if (pesquisa == "fanta laranja" || pesquisa == "fanta" || pesquisa == "Fanta") {
        alert();
    } else if (pesquisa == "jarra de suco" || pesquisa == "Suco" || pesquisa == "suco") {
        alert();
    } else if (pesquisa == "brahma" || pesquisa == "cerveja" || pesquisa == "Cerveja") {
        alert();
    } else if (pesquisa == "corona") {
        alert();
    } else if (pesquisa == "heineken") {
        alert();
    } else if (pesquisa == "whisky") {
        alert();
    } else if (pesquisa == "sorvete") {
        alert();
    } else {
        alert("Desculpe, não temos esse item! :(")
        return false;
    }
}
