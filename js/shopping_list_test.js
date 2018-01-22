const expect = chai.expect;
const should = chai.should();

// shopping list item
describe(`ShoppingListItem class setup`, function() {
  
  let item;

  before(function() {
    item = new ShoppingListItem(`banana`, `yellow fruit`);
  })

  after(function() {
    item = null;
  })

  it(`should be a class`, function() {
    expect(ShoppingListItem).to.be.a(`function`);
    expect(item).to.be.instanceof(ShoppingListItem);
  });

  it(`should have 'name' and 'description properties`, function() {
    expect(item.name,`name`).to.equal(`banana`);
    expect(item.description).to.equal(`yellow fruit`);
  });

  it(`should have a property named 'is_done' that is false`, function() {
    expect(item.is_done).to.be.false;
  });

  // test for edge cases: passing empty string, anything that's not a string.
});

describe(`ShoppingListItem.check() and .uncheck()`, function() {
  let jacket = new ShoppingListItem(`jacket`, `red jacket`);
  it(`check should be a function`, function() {
    expect(jacket.check).to.be.a(`function`);
  });

  it(`should set is_done to true`, function() {
    jacket.check();
    expect(jacket.is_done).to.be.true;
  });

  it(`uncheck should be a function`, function() {
    expect(jacket.uncheck).to.be.a(`function`);
  });

  it(`should set is_done to false`, function() {
    jacket.uncheck();
    expect(jacket.is_done).to.be.false;
  });
});

describe(`ShoppingListItem.render()`, function() {
  let name = `laptop`;
  let desc = `macbook air 2010`;
  let laptop = new ShoppingListItem(name, desc);
  it(`should be a function`, function() {
    expect(laptop.render).to.be.a(`function`);
  });

  it.skip(`should return an html formatted string`, function() {
    expect(laptop.is_done).to.equal(false);
    expect(laptop.name).to.equal(name);
    expect(laptop.description).to.equal(desc);
    expect(laptop.render()).to.equal(`<li class="completed_${false}"><span>${name}</span><span>${desc}</span></li>`);
  });
});

// shopping list
describe(`ShoppingList class setup`, function() {

  it(`should be a class`, function() {
    expect(new ShoppingList()).to.be.an.instanceof(ShoppingList);
  });

  it(`should have a property name 'items'`, function() {
    expect(new ShoppingList().items).to.deep.equal([]);
  });
})

describe(`ShoppingList.addItem()`, function() {

  let newList = new ShoppingList();
  it(`should be a function`, function() {
    expect(newList.addItem).to.be.a('function');
  });

  it(`should only accept ShoppingListItem objects`, function() {
    expect(newList.addItem.bind(newList, `unicorn`)).to.throw(`Item`);
  });

  it(`should add ShoppingListItems to ShoppingList`, function() {
    let banana = new ShoppingListItem(`banana`, `yellow fruit`);
    let keyboard = new ShoppingListItem(`keyboard`, `type on me`);
    let coffee = new ShoppingListItem(`coffee`, `developer fuel`);
    newList.addItem(banana);
    newList.addItem(keyboard);
    newList.addItem(coffee);

    expect(newList.items).to.include(coffee, keyboard, banana);
    expect(newList.items[2]).to.equal(coffee);
    expect(newList.items[0]).to.equal(banana);
    expect(newList.items.length).to.equal(3);
  });
})

describe(`ShoppingList.removeItem()`, function() {
  let newList = new ShoppingList();
  let banana = new ShoppingListItem(`banana`, `yellow fruit`);
  let keyboard = new ShoppingListItem(`keyboard`, `type on me`);
  let coffee = new ShoppingListItem(`coffee`, `developer fuel`);
  newList.addItem(banana);
  newList.addItem(keyboard);
  newList.addItem(coffee);
  newList.removeItem(banana);
  newList.removeItem();

  it(`should be a function`, function() {
    expect(newList.removeItem).to.be.a('function');
  });

  it(`should only accept ShoppingListItem objects`, function() {
    expect(newList.removeItem.bind(newList, `unicorn`)).to.throw(`Item`);
  });

  it(`should remove the object from ShoppingListItems.items`, function() {
    expect(newList.items).to.not.include(banana);
  });

  it(`should remove the last object in items list, if no parameter given`, function() {
    expect(newList.items).to.not.include(coffee);
  });

  it(`if items list is empty`, function() {
    newList.removeItem(keyboard);
    expect(newList.removeItem()).to.be.false;
  });

  it(`if item is not in the list`, function() {
    expect(newList.removeItem(new ShoppingListItem(`iPhone`,`time sucking device`))).to.be.false;
  });
});

describe(`ShoppingList.render()`, function() {
  it(`should be a function`, function() {
    expect(new ShoppingList().render).to.be.a(`function`);
  });

  it(`should return an html formatted string`, function() {
    let newList = new ShoppingList();
    let banana = new ShoppingListItem(`banana`, `yellow fruit`);
    let keyboard = new ShoppingListItem(`keyboard`, `type on me`);
    let coffee = new ShoppingListItem(`coffee`, `developer fuel`);
    newList.addItem(banana);
    newList.addItem(keyboard);
    newList.addItem(coffee);
  
    expect(newList.render()).to.equal(`<ul>${banana.render()}${keyboard.render()}${coffee.render()}</ul>`);
  });

  it(`should return an html formatted string (empty list)`, function() {
    expect(new ShoppingList().render()).to.equal(`<ul></ul>`);
  });
});