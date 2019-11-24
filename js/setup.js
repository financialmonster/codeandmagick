"use strict";

(function() {
	window.setup = document.querySelector(".setup");

	let setupOpen = document.querySelector(".setup-open");
	let setupClose = window.setup.querySelector(".setup-close");
	let userNameInput = document.forms[0].username;

	setupOpen.addEventListener("click", openSetup);

	setupOpen.addEventListener("keydown", function(evt) {
		if (evt.code === "Enter") {
			openSetup();
		}
	});

	setupClose.addEventListener("click", closeSetup);

	setupClose.addEventListener("keydown", function(evt) {
		if (evt.code === "Enter") {
			closeSetup();
		}
	});

	function openSetup() {
		window.setup.classList.remove("hidden");
		document.addEventListener("keydown", setupEscPressHandler);
	}

	function closeSetup() {
		window.setup.classList.add("hidden");
		window.setup.style.left = "";
		window.setup.style.top = "";
		document.removeEventListener("keydown", setupEscPressHandler);
	}

	function setupEscPressHandler(evt) {
		if (
			evt.code === "Escape" &&
			!userNameInput.matches(".setup-user-name:focus")
		) {
			closeSetup();
		}
	}
})();
