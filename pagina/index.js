if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready();
}

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

function ready() {
    
    const removeProductButtons = document.getElementsByClassName("remove-product-button");
    for (var i = 0; i < removeProductButtons.length; i++) {
        removeProductButtons[i].addEventListener("click", removeProduct)
    
    }

    const quantityInputs = document.getElementsByClassName("product-qtd-input");
    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", updateTotal);
    }

    const addToCartButtons = document.getElementsByClassName("product");
    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", addProductToCart)
    }
}

function addProductToCart(event) {
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
<<<<<<< HEAD
        `
    <td class="product-identification">
        <img src=${productImage} alt=${productTitle} width="40px" height="40px">
        <strong class="text-warning me-1 cart-product-title">${productTitle}</strong>
    </td>
    <td>
        <p class="cart-product-price text-warning">${productPrice}</p>
    </td>
    <td>
        <input type="number" value="2" min="0" class="rounded small product-qtd-input">
        <button type="button" class="remove-product-button btn btn-primary">Remover</button>
    </td>
    `
=======
    
    <><td class="product-identification">
            <img src $ {...productImage} alt="${productTitle}" width="40px" height="40px">
                <strong class="text-warning me-1 cart-product-title">${productTitle}</strong>
            </></td><td>
                <span class="text-warning cart-product-price">${productPrice}</span>
            </td><td>
                <input type="number" value="1" min="0" class="rounded small product-qtd-input">
                    <button type="button" class="remove-product-button btn btn-primary">Remover</button>
                </></td></>
    
>>>>>>> 1e8af3adf8740a29624a4ea1e61c5a2945955f30

    const tableBody = document.getElementById("carrinhoArea");
    tableBody.append(newCartProduct);
}

function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
}

function updateTotal() {
    let totalAmount = 0;
    const cartProducts = document.getElementsByClassName("cart-product")
    for(var i = 0; i < cartProducts.length; i++) {
        const productPrice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".");
        const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value;
        totalAmount += productPrice * productQuantity;
    }
    totalAmount = totalAmount.toFixed(2);
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount;
}
