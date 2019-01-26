pry = require('pryjs');
const assert = require('chai').assert;
const index = require('../lib/index');

describe('Array', function() {
  it('should start empty', function() {
    var arr = [];
    assert.equal(arr.length, 0);
  });
});

describe("sweatherAPIFetch", () => {
  it("returns weather data", () => {
    let url = 'https://stormy-depths-85632.herokuapp.com/api/v1/';
    let param = 'location=denver,co';
    let actual = typeof(index.requestAPI(url, param));

    .then assert.equal(Object, actual);
  })
});
