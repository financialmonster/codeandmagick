"use strict";

(function() {
	window.update = function(colorOfCoat, colorOfEyes) {
		let wizardElements = window.backend["response"];

		window.render["setRating"](wizardElements, colorOfCoat, colorOfEyes);
		wizardElements.sort(window.render["sortElements"]);
		window.render["addElements"](wizardElements);
	};
})();
