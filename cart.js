document.querySelector("#add-product-btn").addEventListener("click",()=>{
    let pName = document.querySelector("#product-name").value; 
    let pQuantity = document.querySelector("#product-quantity").value; 
    displayProduct(pName, pQuantity);
    document.querySelector("#product-name").value = "";
    document.querySelector("#product-quantity").value = "";
    saveProductToLocalStorage(pName, pQuantity);
    
});

const displayProduct = (product, quantity) =>{
    const ul = document.querySelector("#product-container");
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    ul.append(li);
}

const getStoredCart = () => {
    const storedCart = localStorage.getItem("cart");
    let cart = {}
    if (storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredCart();
    cart[product] = quantity;
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem("cart", cartStringified)
}