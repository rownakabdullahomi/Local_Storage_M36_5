document.querySelector("#add-product-btn").addEventListener("click",()=>{
    let pName = document.querySelector("#product-name").value; 
    let pQuantity = document.querySelector("#product-quantity").value; 
    displayProduct(pName, pQuantity);
    document.querySelector("#product-name").value = "";
    document.querySelector("#product-quantity").value = "";

    
});

const displayProduct = (product, quantity) =>{
    const ul = document.querySelector("#product-container");
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    ul.append(li);
}