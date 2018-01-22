class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.validateItem(item);
    item.index = this.items.length;
    this.items.push(item);
  }

  removeItem(item) {
    if (item !== undefined) {
      this.validateItem(item);
      if (this.items.indexOf(item) !== -1) {
        this.items.splice(this.items.indexOf(item), 1);
        for (let i = item.index; i < this.items.length; i++) {
          this.items[i].index--;
        }
        return true;
      }
      return false;
    }
    if (this.items.length === 0) {
      return false;
    }
    this.items.pop();
    return true;
  }

  render() {
    let res = `<ul>`;
    this.items.forEach((curr) => {
      res += curr.render();
    });
    res += `</ul>`;
    return res;
  }

  validateItem(item) {
    if (item instanceof ShoppingListItem) {
      return true;
    } 
    throw new Error(`Item is not an instance of ShoppingListItem`);
  }
}