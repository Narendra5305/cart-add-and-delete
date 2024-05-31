const cartContainer = document.getElementById("cart-container");


function renderCart(){
    const cartArr = JSON.parse(localStorage.getItem('cart'))
    if (!cartArr) return;
    cartContainer.innerHTML = '';

    cartArr.forEach((el,index)=>{
        const card = document.createElement("div");
        const name = document.createElement("h2");
        const username = document.createElement("p");
        const btn = document.createElement("button");

        btn.textContent= "Delete"
        name.textContent = el.name;
        username.textContent = el.username;

        btn.addEventListener("click" , ()=>{
            console.log("hii")
            const updatedCartArr = cartArr.filter((_,ind)=> ind !==index);
            localStorage.setItem('cart',JSON.stringify(updatedCartArr));
            renderCart();
        })

        card.append(name , username , btn);
        cartContainer.append(card)
    })
}

document.addEventListener('DOMContentLoaded',renderCart)