function inputError() {
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
		alert("all good");
	} else {
		inputError();
	}
});
