"use strict";

(function() {
	window.backend = {
		load: function(onLoad, onError) {
			let xhr = new XMLHttpRequest();
			xhr.responseType = "json";
			xhr.open("GET", GETURL);
			xhr.addEventListener("load", function() {
				if (xhr.status === SUCCESS_STATUS) {
					onLoad(xhr.response);
				} else {
					onError(`Статус ответа ${xhr.status}`);
				}
			});
			xhr.addEventListener("error", function() {
				onError("Произошла ошибка загрузки данных");
			});
			xhr.send();
		},
		save: function(data, onLoad, onError) {
			let xhr = new XMLHttpRequest();
			xhr.responseType = "json";
			xhr.open("POST", POSTURL);
			xhr.addEventListener("load", function() {
				onLoad();
			});
			xhr.addEventListener("error", function() {
				onError("Произошла ошибка отправки формы");
			});
			xhr.send(data);
		},
		response: []
	};

	const GETURL = "https://js.dump.academy/code-and-magick/data";
	const POSTURL = "https://js.dump.academy/code-and-magick";
	const SUCCESS_STATUS = 200;
})();
