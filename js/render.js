"use strict";

(function() {
	window.render = {
		createElements: function(array) {
			let createdElements = [];

			array.forEach(element => {
				let similarWizard = wizardTemplate.cloneNode(true);
				similarWizard.querySelector(
					".setup-similar-label"
				).textContent = element["name"];
				similarWizard.querySelector(".wizard-coat").style.fill =
					element["colorCoat"];
				similarWizard.querySelector(".wizard-eyes").style.fill =
					element["colorEyes"];
				createdElements.push(similarWizard);
			});

			return createdElements;
		},
		addElements: function(array) {
			let fragment = document.createDocumentFragment();
			let currentWizards = similarList.querySelectorAll(
				".setup-similar-item"
			);

			currentWizards.forEach(currentWizard => currentWizard.remove());

			for (let i = 0; i < RENDERED_WIZARDS_NUMBER; i++) {
				fragment.append(array[i]);
			}

			similarList.append(fragment);
		},
		sortElements: function(elementA, elementB) {
			let ratingA = elementA.dataset.rating;
			let ratingB = elementB.dataset.rating;

			if (ratingA === ratingB) {
				let nameA = elementA.querySelector(".setup-similar-label")
					.textContent;
				let nameB = elementB.querySelector(".setup-similar-label")
					.textContent;
				return nameA > nameB ? 1 : -1;
			} else {
				return ratingB - ratingA;
			}
		},
		setRating: function(array, colorOfCoat, colorOfEyes) {
			array.forEach(element => {
				let rating = 0;
				let eyesColor = element.querySelector(".wizard-eyes").style
					.fill;
				let coatColor = element.querySelector(".wizard-coat").style
					.fill;

				if (eyesColor === colorOfEyes) {
					rating++;
				}

				if (coatColor === colorOfCoat) {
					rating += 2;
				}

				element.dataset.rating = rating;
			});
		}
	};

	const RENDERED_WIZARDS_NUMBER = 4;
	let similarList = window.setup.querySelector(".setup-similar-list");
	let userWizard = document.querySelector(".wizard");
	let userWizardColorCoat = userWizard.querySelector(".wizard-coat").style
		.fill;
	let userWizardColorEyes = userWizard.querySelector(".wizard-eyes").style
		.fill;
	let wizardTemplate = document
		.querySelector("template")
		.content.querySelector(".setup-similar-item");

	function successLoadCallback(response) {
		window.backend["response"] = window.render["createElements"](response);
		window.render["setRating"](
			window.backend["response"],
			userWizardColorCoat,
			userWizardColorEyes
		);
		window.backend["response"].sort(window.render["sortElements"]);
		window.render["addElements"](window.backend["response"]);
	}

	window.backend["load"](successLoadCallback, window.form["failCallback"]);
})();
