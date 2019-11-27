"use strict";

(function() {
	const FILE_FORMATS = ["png", "jpeg", "jpg", "gif"];
	let avatarInput = window.form["form"].avatar;
	let userPic = window.setup.querySelector(".setup-user-pic");
	let setupOpenPic = document.querySelector(".setup-open-icon");

	avatarInput.addEventListener("change", function() {
		let file = avatarInput.files[0];
		let fileName = file.name.toLowerCase();
		let isMatches = FILE_FORMATS.some(fileFormat =>
			fileName.endsWith(fileFormat)
		);

		if (isMatches) {
			let reader = new FileReader();

			reader.addEventListener("load", function() {
				userPic.src = reader.result;
				setupOpenPic.src = reader.result;
			});
			reader.readAsDataURL(file);
		}
	});
})();
