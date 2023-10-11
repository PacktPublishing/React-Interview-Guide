function WeatherReport() {
  const [weather, setWeather] = useState({
    temperature: 26,
    city: "Singapore",
  });

  const handleWeatherChange = (e) => {
    if (e.target.name === "temperature") {
      weather.temperature = e.target.value;
    }
    if (e.target.name === "city") {
      weather.city = e.target.value;
    }
  };
  return (
    <>
      <label>
        Temparature:
        <input value={weather.temperature} onChange={handleWeatherChange} />
      </label>
      <label>
        City:
        <input value={weather.city} onChange={handleWeatherChange} />
      </label>
      <div>
        Report:
        <span>{weather.temperature}</span>
        <span>{weather.city}</span>
      </div>
    </>
  );
}
