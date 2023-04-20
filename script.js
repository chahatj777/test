function addToResult(val) {
	document.getElementById('result').value += val;
}

function clearResult() {
	document.getElementById('result').value = '';
}

function backspace() {
	var result = document.getElementById('result').value;
	document.getElementById('result').value = result.substring(0, result.length - 1);
}

function calculate() {
	var result = document.getElementById('result').value;
	var calculation = eval(result);
	document.getElementById('result').value = calculation;
}
function app() {
	var apiKey = 'f0c72f7250fd4e24b2091100232203';
	var city = 'India';

	$.get('https://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + city + '&aqi=no', function(data) {
		console.log(data);

		$('.city').html(data.location.name);
		$('.country').html(data.location.country);
		$('.temp').html(data.current.temp_c + ' &#8451;');
		$('.icon').html('<img src="' + data.current.condition.icon + '">');
		$('.description').html(data.current.condition.text);
	});
}
app();