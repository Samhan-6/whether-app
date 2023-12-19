const apiKey = "3dbcecaed75efa89c0a98f1d81360d76"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const whetherIcon = document.querySelector(".whether-icon")


async function checkWhether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if(response.status == 404) {

        document.querySelector("error").style.display = "block"
        document.querySelector(".whether").style.display = "none"

    } else {

        let data = await response.json()

        // dynamicly updating city, temp and etc...
        document.querySelector('.city').textContent = data.name
        document.querySelector('.temp').textContent = Math.round(data.main.temp) + "°c"
        document.querySelector('.humidity').textContent = data.main.humidity + "%"
        document.querySelector('.wind').textContent = data.wind.speed + " km/h"

        if (data.weather[0].main == "Clouds") {
            whetherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            whetherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            whetherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Humidity") {
            whetherIcon.src = "images/humidity.png"
        }
        else if (data.weather[0].main == "Mist") {
            whetherIcon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "Rain") {
            whetherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Snow") {
            whetherIcon.src = "images/snow.png"
        }
        else if (data.weather[0].main == "Wind") {
            whetherIcon.src = "images/wind.png"
        }

        document.querySelector(".whether").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }
}

searchBtn.addEventListener("click", () => {
    // calling checkWhether function
    checkWhether(searchBox.value) 
})

