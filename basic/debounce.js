// 手写防抖
function debounce(fn, timing) {
	let timer;
	return function () {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn();
		}, timing);
	};
}

// 完整版
function _debounce(fn, delay, immediate) {
	let timer;
	let result;

	const debounced = function () {
		const context = this;
		const args = arguments;

		if (timer) clearTimeout(timer);
		if (immediate) {
			const callNow = !timer;
			timer = setTimeout(function () {
				timer = null;
			}, delay);
			if (callNow) {
				result = fn.apply(context, args);
				return result;
			}
		} else {
			timer = setTimeout(function () {
				fn.apply(context, args);
			}, delay);
		}
	};

	debounced.cancel = function () {
		clearTimeout(timer);
		timer = null;
	};

	return debounced;
}
