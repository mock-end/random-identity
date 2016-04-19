var expect = require('chai').expect;


describe('random-id', function () {

  var id = require('../../');

  it('common', function () {
    expect(id()).to.be.a('string');
    expect(id().length).to.be.equal(8);
    expect(id(16).length).to.be.equal(16);
    expect(id(32).length).to.be.equal(32);
    expect(id(64).length).to.be.equal(32);
  });
});
