import { addItemToCart } from "./cart.js";

const wooUrl = "http://localhost:10004/wp-json/wc/store/products/";
let jacket;
async function getProduct(id) {
    try {
        const response = await fetch(wooUrl+id);
        return await response.json();
    }
    catch (error) {
        // catches errors both in fetch and response.json
        console.log(error);
    }
}



const imagecontainer = document.querySelector(".jacketimage");
const namecontainer = document.querySelector(".jacketname");
const pricecontainer = document.querySelector(".jacketprice");
const colorcontainer = document.querySelector(".jacketcolor");
const descriptioncontainer = document.querySelector(".jacketdescription");
const button = document.getElementById("addtocartbutton");

async function getJacket(id){
    try{
        jacket = await getProduct(id);
        getJacketImage(jacket);
        getJacketName(jacket);
        getJacketPrice(jacket);
        getJacketColor(jacket);
        getJacketDescription(jacket);
    }
    catch (error) {
        imagecontainer.innerHTML = "";
        const elementTitle = document.createElement("h1");
        elementTitle.innerHTML = "Sorry, could not retrieve the jacket with the id: "+id+" at this time.";
        imagecontainer.append(elementTitle);
    }
}

function getJacketImage(jacket){
    imagecontainer.innerHTML = "";
    const jacketImage = document.createElement("img");
    jacketImage.src = jacket.images[0].src;
    imagecontainer.append(jacketImage);
}
function getJacketName(jacket){
    namecontainer.innerHTML="";
    const jacketName = document.createElement("h1");
    jacketName.innerHTML = jacket.name;
    namecontainer.append(jacketName);
}

function getJacketPrice(jacket){
    pricecontainer.innerHTML="";
    const jacketPrice = document.createElement("h2");
    jacketPrice.innerHTML = "$ " + jacket.prices.price/100;
    pricecontainer.append(jacketPrice);
}

function getJacketColor(jacket){
    colorcontainer.innerHTML="";
    const jacketColor = document.createElement("h2");
    jacketColor.innerHTML = jacket.attributes[0].name+": "+jacket.attributes[0].terms[0].name;
    colorcontainer.append(jacketColor);
}

function getJacketDescription(jacket){
    descriptioncontainer.innerHTML="";
    const jacketDescription = document.createElement("p");
    jacketDescription.innerHTML = jacket.description;
    descriptioncontainer.append(jacketDescription);
}

function addJacketToCart(){
    var name = jacket.name;
    var price = jacket.prices.price/100;
    addItemToCart(name, price);
    alert("Item has been added to Bag");
}

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
getJacket(params.get("id"));

button.addEventListener("click", addJacketToCart);