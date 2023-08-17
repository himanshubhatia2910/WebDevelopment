const apiKey="b4adadb08ac994fe63cd5fd9b48e9efc";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const weatherIcon = document.querySelector(".weather-icon")
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status==200){
        document.querySelector(".error").style.display="none";
    }
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display = "none";
    }
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ " km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="icons/clouds.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src ="icons/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="icons/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="icons/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src ="icons/mist.png"
    }
    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);

})


