let newList = new ShoppingList();
let contentDiv = document.getElementById(`content`);
let addToShoppingListButton = document.getElementById(`add_shopping_list_item_button`);

addToShoppingListButton.addEventListener(`click`, add_to_shopping_list);

function add_to_shopping_list() {
  let itemName = document.getElementById(`newitem-name`).value;
  let itemDesc = document.getElementById(`newitem-desc`).value;
  let newItem = new ShoppingListItem(itemName, itemDesc);
  newList.addItem(newItem);
  contentDiv.innerHTML = "";
  contentDiv.innerHTML = newList.render();
  document.getElementById(`newitem-name`).value = "";
  document.getElementById(`newitem-desc`).value = "";
}

