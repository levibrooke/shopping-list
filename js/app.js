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

function changeCheckedStatus(checkbox) {
  let index = checkbox.dataset.index;
  let item = newList.items[index];
  let listItem = checkbox.parentElement;
  let itemSpan = listItem.getElementsByTagName(`span`);
  if (item.is_done) {
    item.uncheck();
    for (let i = 0; i < itemSpan.length; i++) {
      itemSpan[i].setAttribute(`style`, `text-decoration: none`);
    }
  } else {
    item.check();
    for (let i = 0; i < itemSpan.length; i++) {
      itemSpan[i].setAttribute(`style`, `text-decoration: line-through`);
    }
  }
}

function removeItemButtonClicked(button) {
  let index = button.dataset.index;
  let item = newList.items[index];
  newList.removeItem(item);
  contentDiv.innerHTML = "";
  contentDiv.innerHTML = newList.render();
}