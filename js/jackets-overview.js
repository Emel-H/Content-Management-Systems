
const wooUrl = "http://localhost:10004/wp-json/wc/store/products";

async function getProducts() {
    try {
        const response = await fetch(wooUrl);
        return await response.json();
    }
    catch (error) {
        // catches errors both in fetch and response.json
        console.log(error);
    }
}

var jackets = await getProducts();

const container = document.querySelector(".jackets-container");

function getJackets(){
    for(let i=0; i<jackets.length; i++){
        const link = document.createElement("a");
        link.href = "jacket-page.html?id="+(jackets[i].id);
        const jacketCard = document.createElement("div");
        jacketCard.classList = ["jacket-card"];
        addJacketCardInfo(jacketCard,i);
        link.innerHTML=jacketCard.outerHTML;
        container.append(link);
    }
}

function addJacketCardInfo(jacketCard, i){
    addJacketImage(jacketCard, i);
    addJacketName(jacketCard, i);
    addJacketPrice(jacketCard, i);
    
}

function addJacketImage(jacketCard, i){
    const jacketImage = document.createElement("img");
    jacketImage.src = jackets[i].images[0].thumbnail;
    jacketCard.append(jacketImage);
}

function addJacketName(jacketCard, i){
    const jacketName = document.createElement("h3");
    jacketName.innerHTML = jackets[i].name;
    jacketCard.append(jacketName);
}

function addJacketPrice(jacketCard, i){
    const jacketPrice = document.createElement("h3");
    jacketPrice.innerHTML = "$ " + jackets[i].prices.price/100;
    jacketCard.append(jacketPrice);
}

getJackets();