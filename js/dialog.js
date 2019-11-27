"use strict";

(function() {
	let draggableDiv = window.setup.querySelector(".upload");

	function Coordinates(coordX, coordY) {
		(this.x = coordX), (this.y = coordY);
	}

	draggableDiv.addEventListener("mousedown", function(evt) {
		evt.preventDefault();

		let startCoords = new Coordinates(evt.clientX, evt.clientY);
		let isDragged = false;

		function draggableDivMousemoveHandler(moveEvt) {
			moveEvt.preventDefault();
			isDragged = true;

			let shift = new Coordinates(
				startCoords["x"] - moveEvt.clientX,
				startCoords["y"] - moveEvt.clientY
			);

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY
			};

			window.setup.style.left =
				window.setup.offsetLeft - shift["x"] + "px";
			window.setup.style.top = window.setup.offsetTop - shift["y"] + "px";
		}

		function draggableDivMouseupHandler(upEvt) {
			upEvt.preventDefault();

			document.removeEventListener(
				"mousemove",
				draggableDivMousemoveHandler
			);

			document.removeEventListener("mouseup", draggableDivMouseupHandler);

			if (isDragged) {
				draggableDiv.addEventListener(
					"click",
					draggableDivClickPreventDefaultHandler
				);

				function draggableDivClickPreventDefaultHandler(evt) {
					evt.preventDefault();

					draggableDiv.removeEventListener(
						"click",
						draggableDivClickPreventDefaultHandler
					);
				}
			}
		}

		document.addEventListener("mousemove", draggableDivMousemoveHandler);
		document.addEventListener("mouseup", draggableDivMouseupHandler);
	});
})();
