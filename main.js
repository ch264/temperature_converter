// store iput in celsius div in variable
let celsiusInput = document.querySelector(".celsius > input");
let fahrenheitInput = document.querySelector(".fahrenheit > input");
let kelvinInput = document.querySelector(".kelvin > input");

// round output number to 2 decimal points
function roundNum(num) {
	return Math.round(num * 100)/100
}

// refractor function 
function celsiusToFahrenheitAndKelvin() {
	// grab the input value, convert to float number (decimal number)
	let cTemp = parseFloat(celsiusInput.value);
	// convert temperatures
	let fTemp = (cTemp * (9/5)) + 32;
	let kTemp = cTemp + 273.15;
	// show converted temperatures
	fahrenheitInput.value = roundNum(fTemp);
	kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelsiusAndKelvin() {
	let fTemp = parseFloat(fahrenheitInput.value);
	let cTemp = (fTemp - 32) * (5/9);
	let kTemp = (fTemp + 459.67) * (5/9);
	celsiusInput.value = roundNum(cTemp);
	kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelsiusAndFahrenheit() {
	let kTemp = parseFloat(kelvinInput.value);
	let cTemp = kTemp - 273.15;
	let fTemp = (9/5) * (kTemp -273) + 32;
	celsiusInput.value = cTemp;
	kelvinInput.value = kTemp;
	celsiusInput.value = roundNum(cTemp);
	fahrenheitInput.value = roundNum(fTemp);
}

function main() {
	// add event handlers to input fields
	celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
	fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
	kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);
}

main();


