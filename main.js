// store iput in celsius div in variable
let celciusInput = document.querySelector(".celsius > input");
let fahrenheitInput = document.querySelector(".fahrenheit > input");
let kelvinInput = document.querySelector(".kelvin > input");

// refractor function 
function celsiusToFahrenheitAndKelvin() {
	// grab the input value, convert to float number (decimal number)
	let cTemp = parseFloat(celciusInput.nodeValue);
	// convert temperatures
	let fTemp = (cTemp * (9/5)) + 32;
	let kTemp = cTemp + 273.15;
	// show converted temperatures
	fahrenheitInput.value = fTemp;
	kelvinInput.value = kTemp;
}

function fahrenheitToCelsiusAndKelvin() {
	let fTemp = parseFloat(fahrenheitInput.value);
	let cTemp = (fTemp - 32) * (5/9);
	let kTemp = (fTemp + 459.67) * (5/9);
	celciusInput.value = cTemp;
	kelvinInput.value = kTemp;
}
function kelvinToCelsiusAndFahrenheit() {
	let fTemp = parseFloat(fahrenheitInput.value);
	let cTemp = (fTemp - 32) * (5/9);
	let kTemp = (fTemp + 459.67) * (5/9);
	celciusInput.value = cTemp;
	kelvinInput.value = kTemp;
}

// add event handlers to input fields
celciusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);



