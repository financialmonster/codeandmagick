import setup from './setup.js';
import form from './form.js';
import debounce from './debounce.js';
import update from './update.js';

const wizard = {
    coat: setup.querySelector('.wizard-coat'),
    eyes: setup.querySelector('.wizard-eyes'),
    fireball: setup.querySelector('.setup-fireball-wrap')
};

const FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
const COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];
const EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const eyesColorInput = form['form'].eyescolor;
const coatColorInput = form['form'].coatcolor;
const fireballColorInput = form['form'].fireballcolor;

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function initiateUpdate() {
    debounce(update, coatColorInput.value, eyesColorInput.value)();
}

wizard['eyes'].addEventListener('click', function() {
    wizard['eyes'].style.fill = getRandomElement(EYES_COLORS);
    eyesColorInput.value = wizard['eyes'].style.fill;

    initiateUpdate();
});

wizard['coat'].addEventListener('click', function() {
    wizard['coat'].style.fill = getRandomElement(COAT_COLORS);
    coatColorInput.value = wizard['coat'].style.fill;

    initiateUpdate();
});

wizard['fireball'].addEventListener('click', function() {
    wizard['fireball'].style.background = getRandomElement(FIREBALL_COLORS);
    fireballColorInput.value = wizard['fireball'].style.fill;
});

export default wizard;
