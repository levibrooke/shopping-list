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