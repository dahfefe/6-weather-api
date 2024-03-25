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
                // var weatherObject = [0, 8, 16, 24, 32, 39];
                
                // Side notes: 
                // let allIds = document.querySelectorAll('#weather-forecast-image'); (used for when we want to declare for ALL tag ID's, meaning apply this SAME feature to all tags)
                // for (let index = 0; index < allIds.length; index++) {
                //   //....
                  
                // }

                document.getElementById('weather-forecast-image-today').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[0].weather[0].icon}@2x.png' />`
                document.getElementById('weather-forecast-image-one-day').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[8].weather[0].icon}@2x.png' />`
                document.getElementById('weather-forecast-image-two-day').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[16].weather[0].icon}@2x.png' />`
                document.getElementById('weather-forecast-image-three-day').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[24].weather[0].icon}@2x.png' />`
                document.getElementById('weather-forecast-image-four-day').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[32].weather[0].icon}@2x.png' />`
                document.getElementById('weather-forecast-image-five-day').innerHTML = `<img src='https://openweathermap.org/img/wn/${data2.list[39].weather[0].icon}@2x.png' />` 
                
                // Other option:
                // let imgPara = document.getElementById('weather-forecast-image')
                // let iconImageTag = document.createElement('img')   // <img> </img> 

              });
            } 
          })
        });
      } 

   createNewSearchedButton(cityName);
   cityInputEl.value = "";

  })
}

// function for city buttons that have a preconfigured city per button
function presetButtonClickHandler (event) {
  var presetCityName = event.target.getAttribute('value');
  console.log(presetCityName);
  cityInputEl.value = presetCityName;
  getWeatherData(presetCityName);
}

function createNewSearchedButton (cityName) {
  
  alreadyMadePresets = ['Atlanta', 'Denver', 'Seattle', 'San Francisco', 'Orlando', 'New York', 'Chicago', 'Austin'];

  /*
  if (cityname === alreadyMadePresets) {
    break;
  }
  */

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

  createNewSearchedButton(searchHistory);
};

function saveDataToStorage (searchHistory) {
  localStorage.setItem('search', JSON.stringify(searchHistory));
} 

// Calling functions to both display dates and allow for submit feature on form submission
displayTime();
userFormEl.addEventListener('submit', formSubmitHandler);

// call function to read data from local storage to populate button based on search history
readSavedDataFromStorage();

// preset buttons by city including newly generated buttons from search history
presetCityButtons.addEventListener('click', presetButtonClickHandler);
