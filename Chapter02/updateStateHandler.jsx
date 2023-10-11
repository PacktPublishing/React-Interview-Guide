handleWeatherChange(e) {
    setWeather({
        ...weather,
        [e.target.name]: e.target.value
    })
}