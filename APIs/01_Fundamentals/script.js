// Elements
const dogBtn = document.getElementById('dogBtn');
const jokeBtn = document.getElementById('jokeBtn');
const weatherBtn = document.getElementById('weatherBtn');
const output = document.getElementById('output');
const dogImg = document.getElementById('dogImg');

// Dog API
dogBtn.addEventListener('click', () => {
    output.innerText = 'Loading...';
    dogImg.style.display = 'none';
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            dogImg.src = data.message;
            dogImg.style.display = 'block';
            output.innerText = '';
        })
        .catch(err => output.innerText = 'Error fetching dog image');
});

// Joke API
jokeBtn.addEventListener('click', () => {
    output.innerText = 'Loading...';
    dogImg.style.display = 'none';
    fetch('https://v2.jokeapi.dev/joke/Any')
        .then(response => response.json())
        .then(data => {
            if (data.type === 'single') {
                output.innerText = data.joke;
            } else {
                output.innerText = `${data.setup}\n\n${data.delivery}`;
            }
        })
        .catch(err => output.innerText = 'Error fetching joke');
});

// Weather API
weatherBtn.addEventListener('click', () => {
    output.innerText = 'Loading...';
    dogImg.style.display = 'none';
    const city = prompt("Enter your city: ");
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your key
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                output.innerText = `Temperature in ${city}: ${data.main.temp}°C\nWeather: ${data.weather[0].description}`;
            } else {
                output.innerText = 'City not found';
            }
        })
        .catch(err => output.innerText = 'Error fetching weather');
});