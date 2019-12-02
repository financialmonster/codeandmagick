const setup = document.querySelector('.setup');

const setupOpen = document.querySelector('.setup-open');
const setupClose = setup.querySelector('.setup-close');
const userNameInput = document.forms[0].username;

setupOpen.addEventListener('click', openSetup);

setupOpen.addEventListener('keydown', function(evt) {
    if (evt.code === 'Enter') {
        openSetup();
    }
});

setupClose.addEventListener('click', closeSetup);

setupClose.addEventListener('keydown', function(evt) {
    if (evt.code === 'Enter') {
        closeSetup();
    }
});

function openSetup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', setupEscPressHandler);
}

function closeSetup() {
    setup.classList.add('hidden');
    setup.style.left = '';
    setup.style.top = '';
    document.removeEventListener('keydown', setupEscPressHandler);
}

function setupEscPressHandler(evt) {
    if (evt.code === 'Escape' && !userNameInput.matches('.setup-user-name:focus')) {
        closeSetup();
    }
}

export default setup;
