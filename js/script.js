// RACCOLTA DATI

const shoppingList = ["latte", "mele", "pane", "zucchero", "pasta"];
let innerString    = "";
let i              = 0;

// ITERAZIONE

while (i < shoppingList.length) {
    const curItem = shoppingList[i];
    innerString += `<li>${curItem}</li>`
    i++
}

// STAMPA A SCHERMO

document.querySelector("ul").innerHTML = innerString