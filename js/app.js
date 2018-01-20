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
  checkBoxes();
  document.getElementById(`newitem-name`).value = "";
  document.getElementById(`newitem-desc`).value = "";
}

function changeCheckedStatus(checkbox) {
  let checkboxes = Array.prototype.slice.call(document.getElementsByClassName(`checkbox`));
  let index = checkboxes.indexOf(checkbox);
  let item = newList.items[index];
  if (item.is_done) {
    item.uncheck();
  } else {
    item.check();
  }
}

function checkBoxes() {
  let checkboxes = Array.prototype.slice.call(document.getElementsByClassName(`checkbox`));
  let items = newList.items;
  checkboxes.forEach((curr, index) => {
    if (items[index].is_done) {
      curr.checked = true;
    }
  });
}