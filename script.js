function inputError() {
	var btnElem = document.getElementById("btn-container");
	var errElem = document.createElement("div");
	errElem.innerHTML = "Ensure that you have entered valid numbers.";
	errElem.id = "error-msg";
	errElem.className = "error-msg";
	btnElem.parentNode.insertBefore(errElem, btnElem.nextSibling);
}

document.getElementById("calc-btn").addEventListener("click", () => {
	var formerRes = document.getElementById("results-container");
	var formerErr = document.getElementById("error-msg");
	try {
		formerRes.remove();
	} catch (err) {
	}

	try {
		formerErr.remove();
	} catch (err) {
	}

	var inpHtFt = document.getElementById("ht-ft").value;
	var inpHtIn = document.getElementById("ht-in").value;
	var inpWt = document.getElementById("weight").value;
	var inpAge = document.getElementById("age").value;
	var gen = document.getElementById("gender-dropdown").value;
	var activ = document.getElementById("activity-dropdown").value;

	var htFt = parseFloat(inpHtFt);
	var htIn = parseFloat(inpHtIn);
	var wt = parseFloat(inpWt);
	var age = parseFloat(inpAge);

	var gens = ["Female", "Male"];
	var activs = {"None": 1.2, "Light": 1.375, "Moderate": 1.55, "Very": 1.725, "Olympic Athlete": 1.9};
	var dogs = {"Ball Park Beef Dogs": 180, "Ball Park Franks": 130, "Nathan's Famous Skinless Beef Franks": 130, "Oscar Mayer Classic Beef Uncured Franks": 130, "Oscar Mayer Bun-Lenghth Angus Beef Uncured Franks": 170, "Hebrew National 100% Kosher Beef Franks": 150, "Bar S Classic Franks": 110, "Oscar Mayer Cheese Dogs": 120};

	if ((htFt != NaN) && (htIn != NaN) && wt && age && gens.includes(gen) && activs.hasOwnProperty(activ)) {
		var fullHt = htFt * 12 + htIn;

		var bmr;
		if (gen == "Female") {
			bmr = 655 + (4.3 * wt) + (4.7 * fullHt) - (4.7 * age);
		} else {
			bmr = 66 + (6.3 * wt) + (12.9 * fullHt) - (6.8 * age);
		}

		bmr = bmr * activs[activ];

		var mainElem = document.getElementById("main-container");
		var resultsContainer = document.createElement("div");
		resultsContainer.id = "results-container";
		resultsContainer.className = "results-container";
		mainElem.appendChild(resultsContainer);

		var outMsg = document.createElement("h3");
		outMsg.innerHTML = "You should eat:";
		outMsg.className = "heading-text";
		resultsContainer.appendChild(outMsg);

		var amounts = {};
		var dogsLen = Object.keys(dogs).length;
		var count = 0;

		for (dog in dogs) {
			count++;

			var outElem = document.createElement("span");
			outElem.className = "result";
			var val = Math.round(bmr / dogs[dog] * 100) / 100;
			outElem.innerHTML = val + " " + dog;
			resultsContainer.appendChild(outElem);

			if (count < dogsLen) {
				var orElem = document.createElement("span");
				orElem.className = "result";
				orElem.innerHTML = "or";
				resultsContainer.appendChild(orElem);
			}
		}

	} else {
		inputError();
	}
});

function quoteLoop() {
	setInterval(cycleQuote, 6000);  
}

function cycleQuote() {
	var quoteBox = document.getElementById("quote-container");
	quoteBox.style.opacity = 1;
	var quotes = ['"Sure, you\'ve heard of keto and you\'ve heard of fasting and all that weight-watchers stuff, but this is the first diet that actually makes sense to me."', '"I wouldn\'t be where I am now without a few dogs each day."', '"Pound that shit."', '"Hot dogs, seriously, that\'s it. They\'re the future."'];
	var quotesPpl = ["Jeff Bezos", "Elon Musk", "Oprah Winfrey", "Bill Gates"];
	var quotesLen = quotes.length;

	var quote = document.getElementById("quote");
	var quotePerson = document.getElementById("quote-person");

	var quoteIndex = quotes.indexOf(quote.innerHTML);
	var nextIndex = quoteIndex + 1;

	if (nextIndex == quotesLen) {
		nextIndex = 0;
	}

	quote.innerHTML = quotes[nextIndex];
	quotePerson.innerHTML = '—' + quotesPpl[nextIndex];
}

window.onload = quoteLoop;

