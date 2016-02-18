var expect = require('chai').expect;
var hasClass = require('../bin/index.js');
var classes = ['bar', 'bar-foo '];
var sameClasses = ['bar', 'bar'];
var oneClass = 'bar-foo '; //with trailing space

describe('hasClass - simple expressions, single class name', function(){
  it('not() function', function(){
    var expectedResult = "not(random expression)";
    var actualReault = hasClass.not('random expression');
    expect(actualReault).to.equal(expectedResult);
  });

  it('creates a selector to contain one CSS class (with trimmed name)', function(){
    var expectedResult = "contains(concat(' ', normalize-space(@class), ' '), ' bar-foo ')";
    var actualReault = hasClass.one(oneClass);
    expect(actualReault).to.equal(expectedResult);
  });

  it('creates a selector to NOT contain one CSS class (with trimmed name)', function(){
    var expectedResult = "not(contains(concat(' ', normalize-space(@class), ' '), ' bar-foo '))";
    var actualReault = hasClass.notOne(oneClass);
    expect(actualReault).to.equal(expectedResult);
  });


});

describe('hasClass - multiple class names', function(){
  it('all() - with trimmed names', function(){
    var expectedResult = "contains(concat(' ', normalize-space(@class), ' '), ' bar ') and contains(concat(' ', normalize-space(@class), ' '), ' bar-foo ')";
    var actualReault = hasClass.all(classes);
    expect(actualReault).to.equal(expectedResult);
  });

  //This could be nice, but is outside the scope of this package
  it('all() - does not remove duplicates :(', function(){
    var expectedResult = "contains(concat(' ', normalize-space(@class), ' '), ' bar ') and contains(concat(' ', normalize-space(@class), ' '), ' bar ')";
    var actualReault = hasClass.all(sameClasses);
    expect(actualReault).to.equal(expectedResult);
  });

  it('some() - with trimmed names', function(){
    var expectedResult = "contains(concat(' ', normalize-space(@class), ' '), ' bar ') or contains(concat(' ', normalize-space(@class), ' '), ' bar-foo ')";
    var actualReault = hasClass.some(classes);
    expect(actualReault).to.equal(expectedResult);
  });

  it('notAny() - with trimmed names', function(){
    var expectedResult = "not(contains(concat(' ', normalize-space(@class), ' '), ' bar ') or contains(concat(' ', normalize-space(@class), ' '), ' bar-foo '))";
    var actualReault = hasClass.notAny(classes);
    expect(actualReault).to.equal(expectedResult);
  });
});