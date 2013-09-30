var counter = function(initValue, seed) {
	var reservedValue = initValue;
	var reservedSeed = seed;

	function innerCounter(initValue, seed) {
		reservedValue += initValue;
		reservedSeed += seed;

		return counter(reservedValue, reservedSeed);
	};

	innerCounter.value = function () {
		return reservedValue;
	};

	innerCounter.increment = function () {
		reservedValue += reservedSeed;
		return this;
	};

	innerCounter.decrement = function () {
		reservedValue -= reservedSeed;
		return this;
	};

	return innerCounter;
};

module.exports = counter;