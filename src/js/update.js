import backend from './backend.js';
import render from './render.js';

function update(colorOfCoat, colorOfEyes) {
    const wizardElements = backend['response'];

    render['setRating'](wizardElements, colorOfCoat, colorOfEyes);
    wizardElements.sort(render['sortElements']);
    render['addElements'](wizardElements);
}

export default update;
