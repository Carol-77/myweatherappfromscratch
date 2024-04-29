   function changeWeather(response){
      let temperatureElement = document.querySelector(#temperature);
      temperatureElement.innerHTML = response.data.temperature.current;
      temperatureElement.innerHTML = Math.round(temperature);
   }
   
   
   
   
   function searchCity(city){
    let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${a33b693cfbefd271b0ed075f9a8f65f0}&units=metric';
    axios.get(apiUrl).then(changeWeather);
   
   
   
   
   function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
    let cityElement = document.querySelector("#city-name");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
   } 

    let cityInputElement = document.querySelector("#search-form");
    cityInputElement.addEventListener("submit", handleSearchSubmit);