import setup from './setup.js';
import form from './form.js';

function avatar() {
    const FILE_FORMATS = ['png', 'jpeg', 'jpg', 'gif'];
    const avatarInput = form['form'].avatar;
    const userPic = setup.querySelector('.setup-user-pic');
    const setupOpenPic = document.querySelector('.setup-open-icon');

    avatarInput.addEventListener('change', function() {
        const file = avatarInput.files[0];
        const fileName = file.name.toLowerCase();
        const isMatches = FILE_FORMATS.some(fileFormat => fileName.endsWith(fileFormat));

        if (isMatches) {
            const reader = new FileReader();

            reader.addEventListener('load', function() {
                userPic.src = reader.result;
                setupOpenPic.src = reader.result;
            });
            reader.readAsDataURL(file);
        }
    });
}

export default avatar;
