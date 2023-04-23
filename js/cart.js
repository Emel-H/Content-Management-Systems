let cart = {
    listOfItems: [],
    total: 0,
    currency: "$"
}

let item = {
    name: "",
    price: 0,
}

export function addItemToCart(name, price){
    if(localStorage.getItem("cart")==null){
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    item.name=name;
    item.price=price;
    cart= JSON.parse(localStorage.getItem("cart"));
    cart.listOfItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart.listOfItems);
    calculateTotal();
}

function calculateTotal(){
    cart = JSON.parse(localStorage.getItem("cart"));
    if(cart.listOfItems.length>0){
        cart.total=0;
        for(let i=0; i<cart.listOfItems.length; i++){
            cart.total+=cart.listOfItems[i].price;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function getCart(){
    if(localStorage.getItem("cart")==null){
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    cart = JSON.parse(localStorage.getItem("cart"));
    return cart;
}