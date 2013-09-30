  // // 基础版本
  // curriedFunction = curry(function (a, b, c) { return  a + b + c; });
  // curriedFunction(1, 2, 3); // return 6;
  // curriedFunction(1, 2)(3); // return 6;
  // curriedFunction(1)(2)(3); // return 6;

  // // 升级版本
  // curriedFunction2 = curry(function (a, b, c) { return a + b + c; });
  // curriedFunction2(1, undefined, 3)(2); // return 6;
  // curriedFunction2(undefined, 2, undefined)(1, 3); //  return 6;

var should = require("chai").should();
var curry = require("../curry");

describe('Test group', function() {
	var curried;
	beforeEach(function(){
		curried = curry(function(a, b, c){
			return a + b + c;
		});
	});

	it('should return a curry funtion', function() {
		curry(function() {}).should.be.a('function');
	});

	it('should return sum of three numbers', function(){
		curried(1, 2, 3).should.equal(6);
	});

	it('should return sum of first two and the third numbers', function() {
		curried(1, 2)(3).should.equal(6);
	});

	xit('should return sum of all these three numbers', function() {
		curried(1)(2)(3).should.equal(6);
	});

	describe('functions are', function(){
		it('should return function if not enough args', function(){
			curried(1, 2).should.be.a('function');			
		})
	})
});
