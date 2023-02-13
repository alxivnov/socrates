export default () => {
	Array.prototype.unique = function (callback) {
		return Object.values(this.reduce((prev, curr) => {
			let key = callback
				? typeof (callback) == 'function'
					? callback(curr)
					: curr[callback]
				: curr;
			prev[key] = curr;
			return prev;
		}, {}))
	};

	Object.prototype.defined = function () {
		Object.keys(this)
			.filter(key => this[key] !== undefined)
			.reduce((prev, curr) => {
				prev[curr] = this[curr];
				return prev;
			}, {})
	};

	Boolean.isBoolean = function (boolean) {
		return typeof (boolean) == 'boolean';
	};

	Function.isFunction = function (func) {
		return typeof (func) == 'function';
	};

	Number.isNumber = function (number) {
		return typeof (number) == 'bigint' || typeof (number) == 'number';
	};

	Object.isObject = function (object) {
		return typeof (object) == 'object' && !Array.isArray(object) && object !== null;
	};

	String.isString = function (string) {
		return typeof (string) == 'string';
	};
}
