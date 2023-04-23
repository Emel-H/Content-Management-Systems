import { getCart } from "./cart.js";

const tableContainer = document.getElementById("cartSummary");

function getSummary(){
    var cart = getCart();
    for(let i=0; i<cart.listOfItems.length; i++){
        const tableRow = document.createElement("tr");
        const tableCol1 =document.createElement("td");
        const tableCol2 =document.createElement("td");
        tableCol1.innerHTML = cart.listOfItems[i].name; 
        tableCol2.innerHTML =" $" + cart.listOfItems[i].price;
        tableRow.append(tableCol1);
        tableRow.append(tableCol2);
        tableContainer.append(tableRow);
    }
    const line = document.createElement("hr");
    tableContainer.append(line);
    const tableRow = document.createElement("tr");
    const tableCol1 =document.createElement("td");
    const tableCol2 =document.createElement("td");
    tableCol1.innerHTML = "Total"; 
    tableCol2.innerHTML =" $" + cart.total;
    tableRow.append(tableCol1);
    tableRow.append(tableCol2);
    tableContainer.append(tableRow);
    
}

getSummary();