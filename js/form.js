"use strict";

(function() {
	window.form = {
		form: document.forms[0],
		failCallback: function(errorMessage) {
			notification.classList.remove("hidden");
			notification.style.color = "red";
			notification.textContent = errorMessage;
			setTimeout(() => notification.classList.add("hidden"), TIMEOUT);
		}
	};

	const TIMEOUT = 2000;
	let notification = document.querySelector(".notification");

	window.form["form"].addEventListener("submit", function(evt) {
		evt.preventDefault();

		window.backend["save"](
			new FormData(window.form["form"]),
			successSaveCallback,
			window.form["failCallback"]
		);
	});

	function successSaveCallback() {
		notification.classList.remove("hidden");
		notification.style.color = "black";
		notification.textContent = "Данные успешно сохранены";
		setTimeout(() => notification.classList.add("hidden"), TIMEOUT);
	}
})();
