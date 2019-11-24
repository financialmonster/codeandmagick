"use strict";

(function() {
	window.debounce = function(debounsedFunc, firstArg, secondArg) {
		if (lastTimeout) {
			clearTimeout(lastTimeout);
		}

		lastTimeout = setTimeout(() => {
			debounsedFunc(firstArg, secondArg);
		}, DEBOUNCE_INTERVAL);
	};

	let lastTimeout = null;
	const DEBOUNCE_INTERVAL = 500;
})();
