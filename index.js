const inventoryDisplayTable = document.querySelector("tbody")
const submitButton = document.querySelector(".button")
const newItemForm = document.querySelector("form")
const nextButton = document.querySelector("#next")
const previousButton = document.querySelector("#previous")

let itemInformation = {};
let itemDisplayArray = [];

newItemForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    itemInformation = {
        itemName: formData.get("item-name"),
        itemSellIn: +formData.get("sell-in"),
        itemQuality: +formData.get("item-quality"),
        itemCategory: getCategory(formData.get("item-name"))
    }
    itemDisplayArray.push(itemInformation);
    console.log(itemDisplayArray)

    const tableNewInventoryItem = document.createElement("tr");
    tableNewInventoryItem.innerHTML = `
    <td class="item-name">${itemInformation.itemName}</td>
    <td class="item-sell-in">${itemInformation.itemSellIn}</td>
    <td>${itemInformation.itemQuality}</td>
    `
    tableNewInventoryItem.classList.add("custom-inventory-item");
    inventoryDisplayTable.append(tableNewInventoryItem);
})

nextButton.addEventListener("click", () => {
    specialQuality();
    limitQuality();
    sellIn();
    sellOut();
})


function getCategory(itemName) {
    if (itemName.includes("Aged Brie")) {
        return "aged"
    } else if (itemName.includes("Backstage")) {
        return "backstage"
    } else if (itemName.includes("Sulfuras")) {
        return "sulfuras"
    } else if (itemName.includes("Conjured")) {
        return "conjured"
    } else {
        return "none"
    }
}