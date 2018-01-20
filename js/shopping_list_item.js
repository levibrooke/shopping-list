class ShoppingListItem {
  constructor(name, description)  {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    return `<li class="completed_${this.is_done}"><input class='checkbox' type='checkbox' onchange='changeCheckedStatus(this)'><span>${this.name}</span> <span>${this.description}</span><button class="remove-item" onclick="removeItemButtonClicked(this)">x</button></li>`;
  }
}