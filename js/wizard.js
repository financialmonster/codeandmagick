"use strict";

(function() {
	window.wizard = {
		coat: window.setup.querySelector(".wizard-coat"),
		eyes: window.setup.querySelector(".wizard-eyes"),
		fireball: window.setup.querySelector(".setup-fireball-wrap")
	};

	const FIREBALL_COLORS = [
		"#ee4830",
		"#30a8ee",
		"#5ce6c0",
		"#e848d5",
		"#e6e848"
	];
	const COAT_COLORS = [
		"rgb(101, 137, 164)",
		"rgb(241, 43, 107)",
		"rgb(146, 100, 161)",
		"rgb(56, 159, 117)",
		"rgb(215, 210, 55)",
		"rgb(0, 0, 0)"
	];
	const EYES_COLORS = ["black", "red", "blue", "yellow", "green"];
	let eyesColorInput = window.form["form"].eyescolor;
	let coatColorInput = window.form["form"].coatcolor;
	let fireballColorInput = window.form["form"].fireballcolor;

	function getRandomElement(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	function initiateUpdate() {
		window["debounce"](
			window["update"],
			coatColorInput.value,
			eyesColorInput.value
		)();
	}

	window.wizard["eyes"].addEventListener("click", function() {
		window.wizard["eyes"].style.fill = getRandomElement(EYES_COLORS);
		eyesColorInput.value = window.wizard["eyes"].style.fill;

		initiateUpdate();
	});

	window.wizard["coat"].addEventListener("click", function() {
		window.wizard["coat"].style.fill = getRandomElement(COAT_COLORS);
		coatColorInput.value = window.wizard["coat"].style.fill;

		initiateUpdate();
	});

	window.wizard["fireball"].addEventListener("click", function() {
		window.wizard["fireball"].style.background = getRandomElement(
			FIREBALL_COLORS
		);
		fireballColorInput.value = window.wizard["fireball"].style.fill;
	});
})();
