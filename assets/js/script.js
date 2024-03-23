var userFormEl = document.querySelector('#user-form');
var cityButtonsEl = document.querySelector('#city-buttons');
var cityInputEl = document.querySelector('#cityname');
var todayContainerEl = document.getElementById('#today-container');
var cityTodaySearchTerm = document.querySelector('#city-name-with-date');
var tempToday = document.querySelector('#temp-today');
var windToday = document.querySelector('#wind-today');
var humidityToday = document.querySelector('#humidity-today');

function formSubmitHandler(event) {
  event.preventDefault();

  // todayContainerEl.textContent = '';
  // cityInputEl.value = '';

  // var cityName = cityInputEl.value;



/*

  if (cityName) {
    getWeatherInfo(cityName);
  } else {
    alert('Please enter a city');
  }
};

*/

/*

var buttonClickHandler = function (event) {
  var presetCityName = event.target.getAttribute('data-language');

  if (presetCityName) {
    getFeaturedRepos(presetCityName);

    todayContainerEl.textContent = '';
  }
};

*/

// var getWeatherInfo = function (cityName) {

  var cityName = cityInputEl.value;
  // var apiUrl = 'https://www.loc.gov/search/?q=' + cityName + '&fo=json';
  var apiUrl1 = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=efd27a81601aecf8450cd1c62fee7b55';

  fetch(apiUrl1).then(function (response, cityName) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

          var tempTodayP = document.createElement("p");
          tempTodayP.textContent = cityName;
          tempToday.appendChild(tempTodayP);  

          // populateData(data1.results);
          // displayWeatherInfo(data);
        });
      } 
  })

  var latitude = data.coord.lat
  var longitude = data.coord.lon

  var apiUrl2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=efd27a81601aecf8450cd1c62fee7b55&units=imperial';

  fetch(apiUrl2).then(function (response2) {
    if (response2.ok) {
      response2.json().then(function (data2) {
        console.log(data2);
        // populateData(data2.results);
        // displayWeatherInfo(data);
      });
    } 
})

}

// };

/*

  var tempTodayP = document.createElement("p");
  tempTodayP.textContent = base;
  tempToday.appendChild(tempTodayP);

function populateData(data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];

    console.log(item);

    var itemContainer = document.createElement("div");
    itemContainer.textContent = item.title;
    todayContainerEl.appendChild(itemContainer);
  }
}

};

*/

/*
      
      else {
        todayContainerEl.textContent = "Please enter a valid city name."
        // alert('Error: ' + response.statusText);
      }
    })
    .catch(function (error) {
      alert('Unable to connect to Weather API');
    });
};

*/

/*

var getFeaturedRepos = function (language) {
  var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';   // how did we find this url? (thought process for finding this?)

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayWeatherInfo(data.items, language);   
      });
    } else {
      alert('Error: ' + response.statusText);
    }
  });
};


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

userFormEl.addEventListener('submit', formSubmitHandler);
