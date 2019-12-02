import setup from './setup.js';

function dialog() {
    const draggableDiv = setup.querySelector('.upload');
    const bodyCoords = document.body.getBoundingClientRect();

    function Coordinates(coordX, coordY) {
        (this.x = coordX), (this.y = coordY);
    }

    draggableDiv.addEventListener('mousedown', function(evt) {
        evt.preventDefault();

        let startCoords = new Coordinates(evt.clientX, evt.clientY);
        let isDragged = false;

        function draggableDivMousemoveHandler(moveEvt) {
            moveEvt.preventDefault();
            isDragged = true;

            const setupCoords = setup.getBoundingClientRect();
            const shift = new Coordinates(startCoords['x'] - moveEvt.clientX, startCoords['y'] - moveEvt.clientY);

            startCoords = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            if (setupCoords.left < bodyCoords.left) {
                setup.style.left = bodyCoords.left + setup.offsetWidth / 2 + 'px';
            } else if (setupCoords.right > bodyCoords.right) {
                setup.style.left = bodyCoords.right - setup.offsetWidth / 2 + 'px';
            } else {
                setup.style.left = setup.offsetLeft - shift['x'] + 'px';
            }

            if (setupCoords.top < bodyCoords.top) {
                setup.style.top = bodyCoords.top + 'px';
            } else if (setupCoords.top > setup.offsetHeight / 2) {
                setup.style.top = setup.offsetHeight / 2 + 'px';
            } else {
                setup.style.top = setup.offsetTop - shift['y'] + 'px';
            }
        }

        function draggableDivMouseupHandler(upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', draggableDivMousemoveHandler);

            document.removeEventListener('mouseup', draggableDivMouseupHandler);

            if (isDragged) {
                draggableDiv.addEventListener('click', draggableDivClickPreventDefaultHandler);

                function draggableDivClickPreventDefaultHandler(evt) {
                    evt.preventDefault();

                    draggableDiv.removeEventListener('click', draggableDivClickPreventDefaultHandler);
                }
            }
        }

        document.addEventListener('mousemove', draggableDivMousemoveHandler);
        document.addEventListener('mouseup', draggableDivMouseupHandler);
    });
}

export default dialog;
