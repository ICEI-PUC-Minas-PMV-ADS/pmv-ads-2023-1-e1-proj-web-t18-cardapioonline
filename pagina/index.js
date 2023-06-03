const btnloginSubmit = document.getElementById("btnloginSubmit");
const loginName = document.getElementById("userloginName");
const loginNumber = document.getElementById("userloginNumber");
const loginTable = document.getElementById("selectTable");
const usernameShow = document.getElementById("usernameShow");
const loginBtn = document.getElementById("loginBtn");

class cliente {
    constructor(nome, numero, mesa) {
        this.nome = nome;
        this.numero = numero;
        this.mesa = mesa;
    }
}

btnloginSubmit.addEventListener("click", () => {
    const loginCliente = new cliente(loginName.value, loginNumber.value, loginTable.value);
    usernameShow.textContent = `Olá ${loginCliente.nome} :)`;
    loginBtn.setAttribute("disabled", true);
});

const addToCartButtons = document.getElementsByClassName("product");
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addProductToCart )
}

function addProductToCart(event){
    const button = event.target;
    const productInfos = button.parentElement;
    const productImage = productInfos.getElementsByClassName("product-image")[0].src;
    const productTitle = productInfos.getElementsByClassName("product-title")[0].innerText;
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText

    const produtcsCartName = document.getElementsByClassName("cart-product-title");
    for (var i = 0; i < produtcsCartName.length; i++) {
        if (produtcsCartName[i].innerText === productTitle) {
            produtcsCartName[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++;
            return
        }
    }

    let newCartProduct = document.createElement("tr");
    newCartProduct.classList.add("cart-product");

    newCartProduct.innerHTML = 
    `
    <td class="product-identification">
        <img src=${productImage} alt="${productTitle}" width="40px" height="40px">
        <strong class="text-warning me-1 cart-product-title">${productTitle}</strong>
    </td>
    <td>
        <span class="text-warning">${productPrice}</span>
    </td>
    <td>
        <input type="number" value="1" min="0" class="input-group mt-2 rounded small product-qtd-input">
        <button type="button" class="btn btn-primary">Remover</button> 
    </td>
    `

    const tableBody = document.getElementById("carrinhoArea");
    tableBody.append(newCartProduct);
}
 
 
