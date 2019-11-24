"use strict";

(function() {
	let draggablePic = window.setup.querySelector(".setup-user-pic");

	draggablePic.addEventListener("mousedown", function(evt) {
		evt.preventDefault();

		let startCoords = {
			x: evt.clientX,
			y: evt.clientY
		};
		let isDragged = false;

		function draggablePicMousemoveHandler(moveEvt) {
			moveEvt.preventDefault();
			isDragged = true;

			let shift = {
				x: startCoords["x"] - moveEvt.clientX,
				y: startCoords["y"] - moveEvt.clientY
			};

			startCoords = {
				x: moveEvt.clientX,
				y: moveEvt.clientY
			};

			window.setup.style.left =
				window.setup.offsetLeft - shift["x"] + "px";
			window.setup.style.top = window.setup.offsetTop - shift["y"] + "px";
		}

		function draggablePicMouseupHandler(upEvt) {
			upEvt.preventDefault();

			document.removeEventListener(
				"mousemove",
				draggablePicMousemoveHandler
			);

			document.removeEventListener("mouseup", draggablePicMouseupHandler);

			if (isDragged) {
				draggablePic.addEventListener(
					"click",
					draggablePicClickPreventDefaultHandler
				);

				function draggablePicClickPreventDefaultHandler(evt) {
					evt.preventDefault();

					draggablePic.removeEventListener(
						"click",
						draggablePicClickPreventDefaultHandler
					);
				}
			}
		}

		document.addEventListener("mousemove", draggablePicMousemoveHandler);
		document.addEventListener("mouseup", draggablePicMouseupHandler);
	});
})();
