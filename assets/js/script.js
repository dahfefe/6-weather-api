var userFormEl = document.querySelector('#user-form');
var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputEl = document.querySelector('#cityname');
var todayContainerEl = document.getElementById('#today-container');
var citySearchTerm = document.querySelector('#city-name');
var timeToday = document.querySelector('#today-date');
var tempToday = document.querySelector('#temp-today');
var windToday = document.querySelector('#wind-today');
var humidityToday = document.querySelector('#humidity-today');

// 5-Day Forecast Cards
var cardDateOneDayOut = document.querySelector('#one-day-in-future');
var cardDateTwoDaysOut = document.querySelector('#two-day-in-future');
var cardDateThreeDaysOut = document.querySelector('#three-day-in-future');
var cardDateFourDaysOut = document.querySelector('#four-day-in-future');
var cardDateFiveDaysOut = document.querySelector('#five-day-in-future');

var tempOneDayOut = document.querySelector('#temp-one-day-out');
var tempTwoDaysOut = document.querySelector('#temp-two-days-out');
var tempThreeDaysOut = document.querySelector('#temp-three-days-out');
var tempFourDaysOut = document.querySelector('#temp-four-days-out');
var tempFiveDaysOut = document.querySelector('#temp-five-days-out');

var windOneDayOut = document.querySelector('#wind-one-day-out');
var windTwoDaysOut = document.querySelector('#wind-two-days-out');
var windThreeDaysOut = document.querySelector('#wind-three-days-out');
var windFourDaysOut = document.querySelector('#wind-four-days-out');
var windFiveDaysOut = document.querySelector('#wind-five-days-out');

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
citySearchTerm.textContent = "Sacramento ";

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

function formSubmitHandler(event) {
  event.preventDefault();
  var cityName = cityInputEl.value;

  if (!cityName) {
    alert('Please enter a city');
  } else {
    getWeatherData();
  }
}

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

              });
            } 
          })
        });
      } 

    cityInputEl.value = "";

  })
}

function presetButtonClickHandler (event) {
  var presetCityName = event.target.getAttribute('value');
  console.log(presetCityName);
  citySearchTerm.textContent = presetCityName;
  cityInputEl.value = presetCityName;
  getWeatherData(presetCityName);
}

/*

var displayWeatherInfo = function (data) {   
    todayContainerEl.textContent = 'No weather information found.';
    return;
  }

  cityTodaySearchTerm.textContent = searchTerm;

  for (var i = 0; i < repos.length; i++) {
    var repoName = repos[i].owner.login + '/' + repos[i].name;

    var repoEl = document.createElement('div');
    repoEl.classList = 'list-item flex-row justify-space-between align-center';

    var titleEl = document.createElement('span');
    titleEl.textContent = repoName;

    repoEl.appendChild(titleEl);

    var statusEl = document.createElement('span');
    statusEl.classList = 'flex-row align-center';

    if (repos[i].open_issues_count > 0) {   
      statusEl.innerHTML =
        "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
    } else {
      statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
    }

    repoEl.appendChild(statusEl);  

    todayContainerEl.appendChild(repoEl);
  }


cityButtonsEl.addEventListener('click', buttonClickHandler);

*/

displayTime();
userFormEl.addEventListener('submit', formSubmitHandler);

buttonAtlanta.addEventListener('click', presetButtonClickHandler);
buttonDenver.addEventListener('click', presetButtonClickHandler);
buttonSeattle.addEventListener('click', presetButtonClickHandler);
buttonSF.addEventListener('click', presetButtonClickHandler);
buttonOrlando.addEventListener('click', presetButtonClickHandler);
buttonNY.addEventListener('click', presetButtonClickHandler);
buttonChicago.addEventListener('click', presetButtonClickHandler);
buttonAustin.addEventListener('click', presetButtonClickHandler);
