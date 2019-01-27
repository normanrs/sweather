var weatherAt = "Denver,CO";

function getLocation(){
  weatherAt = document.getElementById('newLocation').value || weatherAt;
  sweatherAPIFetch(weatherAt) ;
}

function sweatherAPIFetch(loc) {
  var request = new XMLHttpRequest();
  var url = 'https://stormy-depths-85632.herokuapp.com/api/v1/forecast?location='
  request.open('GET', url + loc, true);
  request.onload = function () {
    var data = JSON.parse(this.responseText);
    makeWeather(data);
  }
  request.send();
}

// function requestAPI(url, param) {
//   var request = new XMLHttpRequest();
//   var url = url
//   request.open('GET', url + param, true);
//   request.onload = function () {
//     var data = JSON.parse(this.responseText);
//     return data;
//   }
//   request.send();
// }

function makeWeather(data_in) {
  let data = data_in.data.attributes;
  let cityState = data.city_state;
  let currentTemp = parseInt(data.current_temp);
  let dailySummary = data.daily_summary;
  let dateAndTime = (new Date(data.date_and_time)).toUTCString();
  let feelsLike = parseInt(data.feels_like);
  let highTemp = parseInt(data.high_temp);
  let hourlySummary = data.hourly_summary;
  let humidity = parseInt(data.humidity * 100);
  let lowTemp = parseInt(data.low_temp);
  let uvIndex = parseInt(data.uv_index);
  let visibility = parseInt(data.visibility);
  let currentGif = data.dailies[0].gif_url;
  makeHourlies(data.hourlies);
  makeDailies(data.dailies);
  document.getElementById("currentLocation").innerHTML = 'Current Weather in ' + cityState + ' for ';
  document.getElementById("currentTemp").innerHTML     = currentTemp + '°';
  document.getElementById("highLow").innerHTML         = 'High/Low: ' + highTemp + '/' + lowTemp;
  document.getElementById("feelsLike").innerHTML       = 'Feels Like: ' + feelsLike;
  document.getElementById("humidity").innerHTML        = 'Humidity: ' + humidity + '%';
  document.getElementById("uvIndex").innerHTML         = ' UV-Index: ' + uvIndex;
  document.getElementById("visibility").innerHTML      = ` Visibility: ${visibility}mi`;
  document.getElementById("dailySummary").innerHTML    = dailySummary;
  document.getElementById("hourlySummary").innerHTML   = hourlySummary;
  document.getElementById("dateAndTime").innerHTML     = dateAndTime;
  document.getElementById("currentGif").src = currentGif;
  // console.log(data);

  function makeHourlies(array_in) {
    var count = 0;
    array_in.forEach(function(element) {
      count += 1;
      var temp = (parseInt(element.temperature) + '°');
      var timeStamp = new Date(element.hour * 1000);
      document.getElementById("hourlyTemp" + count).innerHTML = temp;
      document.getElementById("hourlyTime" + count).innerHTML = (timeStamp.toLocaleTimeString());
    });
    enableDivider();
  }

  function makeDailies(array_in) {
    console.log(array_in);
    var count = 0;
    array_in.forEach(function(element) {
      count += 1;
      var dayStamp = new Date(element.day_of_week * 1000);
      var dayOfWeek = dayStamp.toLocaleDateString();
      var daySummary = element.summary;
      var precipChance = (parseInt(element.chance_of_precipitation * 100)) + '%' + ' ';
      var dayHigh = (parseInt(element.temperature_high)) + '°' + ' ';
      var dayLow = (parseInt(element.temperature_low)) + '°' + ' ';
      document.getElementById("dailyDay" + count).innerHTML = dayOfWeek;
      document.getElementById("dailySummary" + count).innerHTML = daySummary;
      document.getElementById("dailyChance" + count).innerHTML = precipChance;
      document.getElementById("dailyHighLow" + count).innerHTML = dayHigh + ' / ' + dayLow;
    });
  }
}

function aClear(){
  document.getElementById('newLocation').value = 'Denver,CO';
}

function enableDivider() {
  document.querySelector('#divider').classList.remove("divider-hide");
  document.querySelector('#divider').classList.add("divider-show");
  document.getElementById("divider").innerHTML = 'Forecast';
}

// sweatherAPIFetch(weatherAt);
