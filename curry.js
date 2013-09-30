function curry(fn) {
	var totalLenth = fn.length;

	function generateCurried() {
		var reservedArgs = [].slice.call(arguments);

		function curried() {
			var args = reservedArgs.concat([].slice.call(arguments));

			if (args.length == totalLenth) {
				return fn.apply(null, args);
			} else {
				return generateCurried.apply(null, args);
			}
		}

		return curried;
	}

	return generateCurried();
}

module.exports = curry;