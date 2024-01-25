async function getWeather() {
    var cityInput = document.getElementById("cityInput").value;

    if (cityInput.trim() === "") {
        alert("Please enter a city name!");
        return;
    }

    var apiKey = ''; // Replace with your OpenWeatherMap API key
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
    }
}

function displayWeather(data) {
    var resultContainer = document.getElementById("result");

    if (data.cod === '404') {
        resultContainer.innerHTML = `<p>City not found. Please enter a valid city name.</p>`;
    } else {
        var weatherDescription = data.weather[0].description;
        var temperature = data.main.temp;
        var cityName = data.name;

        resultContainer.innerHTML = `
            <p>City: ${cityName}</p>
            <p>Temperature: ${temperature} °C</p>
            <p>Weather: ${weatherDescription}</p>
        `;
    }
}