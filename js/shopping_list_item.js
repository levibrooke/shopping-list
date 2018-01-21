class ShoppingListItem {
  constructor(name, description)  {
    this.name = name;
    this.description = description;
    this.is_done = false;
    this.index = -1;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    let checked = this.is_done === true ? ` checked` : ``;
    return `<li class="completed_${this.is_done}"><input class='checkbox' type='checkbox' onchange='changeCheckedStatus(this)' data-index='${this.index}' ${checked}><span>${this.name}</span> <span>${this.description}</span><button class="remove-item" onclick="removeItemButtonClicked(this)" data-index='${this.index}'>x</button></li>`;
  }
}