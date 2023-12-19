const apiKey = "3dbcecaed75efa89c0a98f1d81360d76"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=colombo"


async function checkWhether() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    let data = await response.json()

    console.log(data)
}

// calling checkWhether function
checkWhether() 