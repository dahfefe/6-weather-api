var userFormEl = document.querySelector('#user-form');
var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputEl = document.querySelector('#cityname');
var todayContainerEl = document.getElementById('#today-container');
var citySearchTerm = document.querySelector('#city-name');
var timeToday = document.querySelector('#today-date');
var tempToday = document.querySelector('#temp-today');
var windToday = document.querySelector('#wind-today');
var humidityToday = document.querySelector('#humidity-today');
var presetCityButtons = document.querySelector('#preset-buttons-list');

// 5-Day Forecast Cards
var cardDateOneDayOut = document.querySelector('#one-day-in-future');
var cardDateTwoDaysOut = document.querySelector('#two-day-in-future');
var cardDateThreeDaysOut = document.querySelector('#three-day-in-future');
var cardDateFourDaysOut = document.querySelector('#four-day-in-future');
var cardDateFiveDaysOut = document.querySelector('#five-day-in-future');

// 5-Day Forecast Cards - Temperature Info
var tempOneDayOut = document.querySelector('#temp-one-day-out');
var tempTwoDaysOut = document.querySelector('#temp-two-days-out');
var tempThreeDaysOut = document.querySelector('#temp-three-days-out');
var tempFourDaysOut = document.querySelector('#temp-four-days-out');
var tempFiveDaysOut = document.querySelector('#temp-five-days-out');

// 5-Day Forecast Cards - Wind Info
var windOneDayOut = document.querySelector('#wind-one-day-out');
var windTwoDaysOut = document.querySelector('#wind-two-days-out');
var windThreeDaysOut = document.querySelector('#wind-three-days-out');
var windFourDaysOut = document.querySelector('#wind-four-days-out');
var windFiveDaysOut = document.querySelector('#wind-five-days-out');

// 5-Day Forecast Cards - Humidity Info
var humidityOneDayOut = document.querySelector('#humidity-one-day-out');
var humidityTwoDaysOut = document.querySelector('#humidity-two-days-out');
var humidityThreeDaysOut = document.querySelector('#humidity-three-days-out');
var humidityFourDaysOut = document.querySelector('#humidity-four-days-out');
var humidityFiveDaysOut = document.querySelector('#humidity-five-days-out');

// Click buttons as denoted by city label
var buttonAtlanta = document.querySelector('#buttonAtlanta');
var buttonDenver = document.querySelector('#buttonDenver');
var buttonSeattle = document.querySelector('#buttonSeattle');
var buttonSF = document.querySelector('#buttonSF');
var buttonOrlando = document.querySelector('#buttonOrlando');
var buttonNY = document.querySelector('#buttonNY');
var buttonChicago = document.querySelector('#buttonChicago');
var buttonAustin = document.querySelector('#buttonAustin');

// Text field variable for user input + initial input by deafult when opening page
citySearchTerm.textContent = " ";

// Displaying dates from present time
function displayTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  // Create a string in the format "MM/DD/YYYY"
  var formattedDate = `${month}/${day}/${year}`;
  var oneDayOut = `${month}/${day + 1}/${year}`;
  var twoDaysOut = `${month}/${day + 2}/${year}`;
  var threeDaysOut = `${month}/${day + 3}/${year}`;
  var fourDaysOut = `${month}/${day + 4}/${year}`;
  var fiveDaysOut = `${month}/${day + 5}/${year}`;

  // Display the formatted date
  console.log(formattedDate);

  timeToday.textContent = "(" + formattedDate + ")";
  cardDateOneDayOut.textContent = oneDayOut
  cardDateTwoDaysOut.textContent = twoDaysOut
  cardDateThreeDaysOut.textContent = threeDaysOut
  cardDateFourDaysOut.textContent = fourDaysOut
  cardDateFiveDaysOut.textContent = fiveDaysOut
}

// Function for form submission
function formSubmitHandler(event) {
  event.preventDefault();
  var cityName = cityInputEl.value;

  if (!cityName) {
    alert('Please enter a valid city');
  } else {
    getWeatherData();
  }
}

// function that contains two fetch commands to first retrieve longitude and latitude
// then second fetch utilize lon and lat data to retrieve additional weather info
function getWeatherData (cityName) {

  var cityName = cityInputEl.value;
  var apiUrl1 = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=efd27a81601aecf8450cd1c62fee7b55';

  fetch(apiUrl1).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          console.log(cityName);
        
          var latitude = data.coord.lat
          var longitude = data.coord.lon

          var apiUrl2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=efd27a81601aecf8450cd1c62fee7b55&units=imperial';

          fetch(apiUrl2).then(function (response2) {
            if (response2.ok) {
              response2.json().then(function (data2) {
                console.log(data2);
                console.log(data2.list[2].main.temp);

                citySearchTerm.textContent = cityName + " ";
                tempToday.textContent = " " + data2.list[0].main.temp + " ℉";
                windToday.textContent = " " + data2.list[0].wind.speed + " MPH";
                humidityToday.textContent = " " + data2.list[0].main.humidity + " %";

                tempOneDayOut.textContent = " " + data2.list[8].main.temp + " ℉";
                tempTwoDaysOut.textContent = " " + data2.list[16].main.temp + " ℉";
                tempThreeDaysOut.textContent = " " + data2.list[24].main.temp + " ℉";
                tempFourDaysOut.textContent = " " + data2.list[32].main.temp + " ℉";
                tempFiveDaysOut.textContent = " " + data2.list[39].main.temp + " ℉";

                windOneDayOut.textContent = " " + data2.list[8].wind.speed + " MPH";
                windTwoDaysOut.textContent = " " + data2.list[16].wind.speed + " MPH";
                windThreeDaysOut.textContent = " " + data2.list[24].wind.speed + " MPH";
                windFourDaysOut.textContent = " " + data2.list[32].wind.speed + " MPH";
                windFiveDaysOut.textContent = " " + data2.list[39].wind.speed + " MPH";

                humidityOneDayOut.textContent = " " + data2.list[8].main.humidity + " %";
                humidityTwoDaysOut.textContent = " " + data2.list[16].main.humidity + " %";
                humidityThreeDaysOut.textContent = " " + data2.list[24].main.humidity + " %";
                humidityFourDaysOut.textContent = " " + data2.list[32].main.humidity + " %";
                humidityFiveDaysOut.textContent = " " + data2.list[39].main.humidity + " %";

                // for loop to check for weather condition and then apply matching symbol per date
                var weatherObject = [0, 8, 16, 24, 32, 39];

                for (var i=0; i < weatherObject.length; i++) {
                  var weatherConditionSymbol = data2.list[i].weather[0].main;
                  console.log(weatherConditionSymbol);
                  
                  var conditionEl = document.createElement('span');

                  if (weatherConditionSymbol = "Rain") {
                    conditionEl.innerHTML = "<i class='bi bi-cloud-rain'></i>";
                  } else if (weatherConditionSymbol = "Clouds") {
                    conditionEl.innerHTML = "<i class='bi bi-cloudy'></i>";
                  } else {
                    conditionEl.innerHTML = "<i class='bi bi-sun'></i>";
                  }

                  humidityToday.appendChild(conditionEl);
                  humidityOneDayOut.appendChild(conditionEl);
                  humidityTwoDaysOut.appendChild(conditionEl);
                  humidityThreeDaysOut.appendChild(conditionEl);
                  humidityFourDaysOut.appendChild(conditionEl);
                  humidityFiveDaysOut.appendChild(conditionEl);
                } 

              });
            } 
          })
        });
      } 

   createNewSearchedButton(cityName);
   cityInputEl.value = "";

  })
}


/*
function displayWeatherSymbol () {

  var weatherObject = [0, 8, 16, 24, 32, 39];

  for (var i=0; i < weatherObject.length; i++) {
    var weatherConditionSymbol = data2.list[i].weather[0].main;
    console.log(weatherConditionSymbol);
    
    var conditionEl = document.createElement('span');

    if (weatherConditionSymbol = "Rain") {
      conditionEl.innerHTML = "<i class='bi bi-cloud-rain'></i>";
    } else if (weatherConditionSymbol = "Clouds") {
      conditionEl.innerHTML = "<i class='bi bi-cloudy'></i>";
    } else {
      conditionEl.innerHTML = "<i class='bi bi-sun'></i>";
    }

    humidityToday.appendChild(conditionEl);
    humidityOneDayOut.appendChild(conditionEl);
    humidityTwoDaysOut.appendChild(conditionEl);
    humidityThreeDaysOut.appendChild(conditionEl);
    humidityFourDaysOut.appendChild(conditionEl);
    humidityFiveDaysOut.appendChild(conditionEl);
  } 
}
*/

// function for city buttons that have a preconfigured city per button
function presetButtonClickHandler (event) {
  var presetCityName = event.target.getAttribute('value');
  console.log(presetCityName);
  cityInputEl.value = presetCityName;
  getWeatherData(presetCityName);
}

function createNewSearchedButton (cityName) {
  
  var newButton = document.createElement('button');
  newButton.classList = 'btn';
  newButton.setAttribute('value', cityName);

  var buttonTitle = document.createElement('span');
  buttonTitle.textContent = cityName;

  newButton.appendChild(buttonTitle);
  presetCityButtons.appendChild(newButton);

  saveDataToStorage(cityName);
}

function readSavedDataFromStorage () {
  var searchHistory = localStorage.getItem('search');
  if (searchHistory) {
    searchHistory = JSON.parse(searchHistory);
  } else {
    searchHistory = [];
  }
  return searchHistory;
};

function saveDataToStorage (searchHistory) {
  localStorage.setItem('search', JSON.stringify(searchHistory));
} 

// Calling functions to both display dates and allow for submit feature on form submission
displayTime();
userFormEl.addEventListener('submit', formSubmitHandler);

// preset buttons by city
buttonAtlanta.addEventListener('click', presetButtonClickHandler);
buttonDenver.addEventListener('click', presetButtonClickHandler);
buttonSeattle.addEventListener('click', presetButtonClickHandler);
buttonSF.addEventListener('click', presetButtonClickHandler);
buttonOrlando.addEventListener('click', presetButtonClickHandler);
buttonNY.addEventListener('click', presetButtonClickHandler);
buttonChicago.addEventListener('click', presetButtonClickHandler);
buttonAustin.addEventListener('click', presetButtonClickHandler);
