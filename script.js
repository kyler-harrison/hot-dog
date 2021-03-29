function inputError() {
	var btnElem = document.getElementById("btn-container");
	var errElem = document.createElement("div");
	errElem.innerHTML = "Ensure that you have entered valid numbers.";
	errElem.className = "error-msg";
	btnElem.parentNode.insertBefore(errElem, btnElem.nextSibling);
}

document.getElementById("calc-btn").addEventListener("click", () => {
	var inpHtFt = document.getElementById("ht-ft").value;
	var inpHtIn = document.getElementById("ht-in").value;
	var inpAge = document.getElementById("age").value;
	var gen = document.getElementById("gender-dropdown").value;
	var activ = document.getElementById("activity-dropdown").value;

	var htFt = parseFloat(inpHtFt);
	var htIn = parseFloat(inpHtIn);
	var age = parseFloat(inpAge);

	var gens = ["Female", "Male"];
	var activs = ["None", "Light", "Moderate", "Very", "Olympic Athlete"];

	if (htFt && htIn && age && gens.includes(gen) && activs.includes(activ)) {
		var mainElem = document.getElementById("main-container");
		var outMsg = document.createElement("h3");
		outMsg.innerHTML = "You should eat:";
		outMsg.className = "heading-text";
		mainElem.appendChild(outMsg);

		for (var i = 0; i < 10; i++) {
			var newguy = document.createElement("p");
			newguy.innerHTML = "wowza";
			newguy.className = "result";
			mainElem.appendChild(newguy);
		}
	} else {
		inputError();
	}
});
