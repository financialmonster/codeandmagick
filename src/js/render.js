import backend from './backend.js';
import setup from './setup.js';
import form from './form.js';

const render = {
	createElements(array) {
		const createdElements = [];

		array.forEach((element) => {
			const similarWizard = wizardTemplate.cloneNode(true);
			similarWizard.querySelector(`.setup-similar-label`).textContent = element[`name`];
			similarWizard.querySelector(`.wizard-coat`).style.fill = element[`colorCoat`];
			similarWizard.querySelector(`.wizard-eyes`).style.fill = element[`colorEyes`];
			createdElements.push(similarWizard);
		});

		return createdElements;
	},
	addElements(array) {
		const fragment = document.createDocumentFragment();
		const currentWizards = similarList.querySelectorAll(`.setup-similar-item`);

		currentWizards.forEach((currentWizard) => currentWizard.remove());

		for (let i = 0; i < RENDERED_WIZARDS_NUMBER; i++) {
			fragment.append(array[i]);
		}

		similarList.append(fragment);
	},
	sortElements(elementA, elementB) {
		const ratingA = elementA.dataset.rating;
		const ratingB = elementB.dataset.rating;

		if (ratingA === ratingB) {
			const nameA = elementA.querySelector(`.setup-similar-label`).textContent;
			const nameB = elementB.querySelector(`.setup-similar-label`).textContent;
			return nameA > nameB ? 1 : -1;
		} else {
			return ratingB - ratingA;
		}
	},
	setRating(array, colorOfCoat, colorOfEyes) {
		array.forEach((element) => {
			let rating = 0;
			const eyesColor = element.querySelector(`.wizard-eyes`).style.fill;
			const coatColor = element.querySelector(`.wizard-coat`).style.fill;

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
const similarList = setup.querySelector(`.setup-similar-list`);
const userWizard = document.querySelector(`.wizard`);
const userWizardColorCoat = userWizard.querySelector(`.wizard-coat`).style.fill;
const userWizardColorEyes = userWizard.querySelector(`.wizard-eyes`).style.fill;
const wizardTemplate = document.querySelector(`template`).content.querySelector(`.setup-similar-item`);

function successLoadCallback(response) {
	backend[`response`] = render[`createElements`](response);
	render[`setRating`](backend[`response`], userWizardColorCoat, userWizardColorEyes);
	backend[`response`].sort(render[`sortElements`]);
	render[`addElements`](backend[`response`]);
}

backend[`load`](successLoadCallback, form[`failCallback`]);

export default render;
