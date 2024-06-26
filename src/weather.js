
   
   function changeWeather(response){
      let temperatureElement = document.querySelector("#temp-value");
      temperatureElement.innerHTML = response.data.temperature.current;
      let timeElement = document.querySelector("#time")
      let cityElement = document.querySelector("#city-name");
      let descriptionElement = document.querySelector("#description");
      let humidityElement = document.querySelector("#humidity")
      let windSpeedElement = document.querySelector("#wind-speed")
      let date = new Date(response.data.time*1000);
      let iconElement = document.querySelector("#icon");
      
      
      icon.innerHTML = 
      '<img src="${response.data.condition.icon_url}" class="weather-icon"';

      cityElement.innerHTML = response.data.city;
      descriptionElement.innerHTML = response.data.condition.description;
      timeElement.innerHTML = formatDate(date);
      humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
      windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
      temperatureElement.innerHTML = Math.round(temp-value);
      
   }
   
   function formatDate(date){
      let minutes = date.getMinutes();
      let hours = date.getHours();
      let days = ["Sunday", "Monday", "Teusday","Wednesday", "Thursday","Friday","Saturday"];
      let day = days[date.getDay()];

      if(minutes<10){
         minutes = "0${minutes}";
      }

      return `${day} ${hours} ${minutes}`;
   }  
   
   function searchCity(city){
    let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
    console.log(apiUrl);
    axios.get(apiUrl).then(changeWeather);
   
   
   
   }
   function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
    
    searchCity(searchInput.value);
   } 

    let cityInputElement = document.querySelector("#search-form");
    cityInputElement.addEventListener("submit", handleSearchSubmit);  
    
   searchCity("Paris");



