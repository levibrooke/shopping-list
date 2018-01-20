class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.validateItem(item);
    this.items.push(item);
  }

  removeItem(item) {
    if (item !== undefined) {
      this.validateItem(item);
      if (this.items.indexOf(item) !== -1) {
        this.items.splice(this.items.indexOf(item), 1);
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

  validateItem(item) {
    if (item instanceof ShoppingListItem) {
      return true;
    } 
    throw new Error(`Item is not an instance of ShoppingListItem`);
  }
}