import backend from './backend.js';

const form = {
    form: document.forms[0],
    failCallback: function(errorMessage) {
        notification.classList.remove('hidden');
        notification.style.color = 'red';
        notification.textContent = errorMessage;
        setTimeout(() => notification.classList.add('hidden'), TIMEOUT);
    }
};

const TIMEOUT = 2000;
const notification = document.querySelector('.notification');

form['form'].addEventListener('submit', function(evt) {
    evt.preventDefault();

    backend['save'](new FormData(form['form']), successSaveCallback, form['failCallback']);
});

function successSaveCallback() {
    notification.classList.remove('hidden');
    notification.style.color = 'black';
    notification.textContent = 'Данные успешно сохранены';
    setTimeout(() => notification.classList.add('hidden'), TIMEOUT);
}

export default form;
