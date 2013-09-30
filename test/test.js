var should = require("chai").should();
// var curry = require("../curry");
var counter = require("../counter");


describe('Counter Test', function() {

	it('1. should contain all keys required ', function() {
		var incrementByOneFromOne = counter(1, 1);
		incrementByOneFromOne.should.include.keys('value');
		incrementByOneFromOne.should.include.keys('increment');
		incrementByOneFromOne.should.include.keys('decrement');
	});

	it('2. should return a function for key value', function() {
		var incrementByOneFromOne = counter(2, 4);
		incrementByOneFromOne.value().should.equals(2);
	});

	it('3. should return the increment of initial value', function() {
		var incrementByOneFromOne = counter(2, 4);
		incrementByOneFromOne.increment().value().should.equals(6);
	});

	it('4. should return the decrement of initial value', function(){
		var incrementByOneFromOne = counter(10, 1);
		incrementByOneFromOne.decrement().value().should.equals(9);
	});

	it('5. should return the correct result', function() {
		var incrementByTenFromFive = counter(10, 4);
		incrementByTenFromFive.value().should.equal(10);
		incrementByTenFromFive.increment().value().should.equal(14);
		incrementByTenFromFive.decrement().value().should.equal(10);
	});

	it('6. should store the 1st value and add the 2nd value', function() {
		var counter1 = counter(1, 1);
		var counter2 = counter1(2, 2);
		counter2.value().should.equal(3);
	});

	it('7. should return 2', function() {
		var counter1 = counter(1, 1);
		var counter2 = counter1(2, 2);
		var counter3 = counter2(-1, -1);
		counter3.value().should.equal(2);
	});

	it('8. should return 6', function() {
		var counter1 = counter(1, 1);
		var counter2 = counter1(2, 2);
		counter2.increment().value().should.equal(6);
	});

	it('9. should return 0', function() {
		var counter1 = counter(1, 1);
		var counter2 = counter1(2, 2);
		counter2.decrement().value().should.equal(0);
	});
});

// describe('Test group', function() {
// 	var curried;
// 	beforeEach(function(){
// 		curried = curry(function(a, b, c){
// 			return a + b + c;
// 		});
// 	});

// 	it('should return a curry funtion', function() {
// 		curry(function() {}).should.be.a('function');
// 	});

// 	it('should return sum of three numbers', function(){
// 		curried(1, 2, 3).should.equal(6);
// 	});

// 	it('should return sum of first two and the third numbers', function() {
// 		curried(1, 2)(3).should.equal(6);
// 	});

// 	xit('should return sum of all these three numbers', function() {
// 		curried(1)(2)(3).should.equal(6);
// 	});

// 	describe('functions are', function(){
// 		it('should return function if not enough args', function(){
// 			curried(1, 2).should.be.a('function');			
// 		})
// 	})
// });
