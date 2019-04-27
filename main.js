// store iput in celsius div in variable
let celciusInput = document.querySelector(".celsius > input");
let fahrenheitInput = document.querySelector(".fahrenheit > input");
let kelvinInput = document.querySelector(".kelvin > input");

// add event handlers to input fields
celciusInput.addEventListener('input', function() {
	// grab the input value, convert to float number (decimal number)
	let cTemp = parseFloat(celciusInput.nodeValue);
	// convert temperatures
	let fTemp = (cTemp * (9/5)) + 32;
	let kTemp = cTemp + 273.15;
	// show converted temperatures
	fahrenheitInput.value = fTemp;
	kelvinInput.value = kTemp;
	})

fahrenheitInput.addEventListener('input', function() {

})
kelvinInput.addEventListener('input', function() {

})



console.log(celciusInput);