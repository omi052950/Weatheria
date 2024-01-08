// ANimations using Gsap


let tl = gsap.timeline();

tl.from(".img-div-left-nav, .logo-name-left-nav, .mid-nav a, .right-nav button, .right-nav i", {
    y: -100,
    duration: 1,
    opacity: 0,
    stagger: 0.1
})
tl.from(".page1-content", {
    scale: 0,
    duration: .5
}) 
tl.from(".page1-content-right-div, .page1-content-left-div", {
    scale: 0,
    opacity: 0,
    stagger: 0.5
})








// Taking live data of weather using api key

const apiKey = "397fd0e397efa6392c34f0b0431101b2";

// my api key - 397fd0e397efa6392c34f0b0431101b2
// sandesh's api key - 863242cfb2b1d357e6093d9a4df19a4b

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search_btn = document.querySelector(".bx-search");
const search_input = document.querySelector(".input");
const weather_img = document.querySelector(".weather img");
const error_img = document.querySelector(".error img");

async function cheackWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        error_img.style.display = "inline-block";
        document.querySelector(".wheather-box").style.display = "none";
        document.querySelector(".weather-details").style.display = "none";
    }
    else {
        error_img.style.display = "none";
        document.querySelector(".wheather-box").style.display = "flex";
        document.querySelector(".weather-details").style.display = "flex";
    }

    var data = await response.json();

    // console.log(data);

    var temprature = document.querySelector(".temprature");
    temprature.innerHTML = Math.round(data.main.temp) + "°C";

    var humidity = document.querySelector("info-humidity span");
    humidity.innerHTML = data.main.humidity + "%";

    var windSpeed = document.querySelector(".info-wind span");
    windSpeed.innerHTML = data.wind.speed + "Km/hr";


    if (data.weather[0].main == "Clouds") {
        weather_img = "cloud.png";
    }
    else if (data.weather[0].main == "Clear") {
        weather_img = "clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weather_img = "rain.png"
    }
    else if (data.weather[0].main == "Mist") {
        weather_img = "mist.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weather_img = "snow.png"
    }
}


search_btn.addEventListener("click", async () => {
    const city = search_input.value;
    cheackWeather(city);
});

