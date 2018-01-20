const expect = chai.expect;
const should = chai.should();

describe(`ShoppingListItem class setup`, function() {

  it(`should be a class`, function() {
    expect(new ShoppingListItem()).to.be.instanceof(ShoppingListItem);
  });

  it(`should have a property name 'name' `, function() {
    expect(new ShoppingListItem(`banana`, `yellow fruit`).name).to.equal(`banana`);
  });

  it(`should have a property name 'description'`, function() {
    expect(new ShoppingListItem(`banana`, `yellow fruit`).description).to.equal(`yellow fruit`);
  });

  it(`should have a property named 'is_done' that is false`, function() {
    expect(new ShoppingListItem(`banana`, `yellow fruit`).is_done).to.be.false;
  });
});

describe(`ShoppingListItem.check()`, function() {
  let jacket = new ShoppingListItem(`jacket`, `red jacket`);
  it(`should be a function`, function() {
    expect(jacket.check).to.be.a(`function`);
  });

  it(`should set is_done to true`, function() {
    jacket.check();
    expect(jacket.is_done).to.be.true;
  });
});

describe(`ShoppingListItem.uncheck()`, function() {
  let waterBottle = new ShoppingListItem(`water bottle`, `blue water bottle`);
  it(`should be a function`, function() {
    expect(waterBottle.uncheck).to.be.a(`function`);
  });

  it(`should set is_done to false`, function() {
    waterBottle.uncheck();
    expect(waterBottle.is_done).to.be.false;
  });
});

describe(`ShoppingListItem.render()`, function() {
  let laptop = new ShoppingListItem(`laptop`, `macbook air 2010`);
  it(`should be a function`, function() {
    expect(laptop.render).to.be.a(`function`);
  });

  it(`should return an html formatted string`, function() {
    expect(laptop.render()).to.equal(`<li class="completed_${laptop.is_done}"><span>${laptop.name}</span> <span>${laptop.description}</span></li>`);
    expect(laptop.render()).to.equal(`<li class="completed_false"><span>laptop</span> <span>macbook air 2010</span></li>`);
  });
});