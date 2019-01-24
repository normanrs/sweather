var weatherAt = "Denver,CO";
var baseURL = 'https://stormy-depths-85632.herokuapp.com';

function getLocation(){
  weatherAt = document.getElementById('newLocation').value || weatherAt;
  currentLocation.innerHTML = ( 'Current Weather in ' + weatherAt + '@ ' );
  sweatherAPIFetch(weatherAt) ;
}

function sweatherAPIFetch(loc) {
  var request = new XMLHttpRequest();
  var url = 'https://stormy-depths-85632.herokuapp.com/api/v1/forecast?location='
  request.open('GET', url + loc, true);
  request.onload = function () {
    var data = JSON.parse(this.responseText);
    formatData(data);
  }
  request.send();
}

function formatData(data_in) {
  let data = data_in.data.attributes;
  let currentTemp = parseInt(data.current_temp);
  let dailySummary = data.daily_summary;
  let dateAndTime = (new Date(data.date_and_time)).toUTCString();
  let feelsLike = parseInt(data.feels_like);
  let highTemp = parseInt(data.high_temp);
  let hourlySummary = data.hourly_summary;
  let humidity = parseInt(data.humidity);
  let lowTemp = parseInt(data.low_temp);
  let uvIndex = parseInt(data.uv_index);
  let visibility = parseInt(data.visibility);
  let currentGif = data.dailies[0].gif_url;
  document.getElementById("currentTemp").innerHTML   = currentTemp + '°';
  document.getElementById("highLow").innerHTML       = 'High/Low: ' + highTemp + '/' + lowTemp;
  document.getElementById("feelsLike").innerHTML     = 'Feels Like: ' + feelsLike;
  document.getElementById("humidity").innerHTML      = 'Humidity: ' + humidity + '%';
  document.getElementById("uvIndex").innerHTML       = ' UV-Index: ' + uvIndex;
  document.getElementById("visibility").innerHTML    = ' Visibility: ' + visibility + 'mi';
  document.getElementById("dailySummary").innerHTML  = dailySummary;
  document.getElementById("hourlySummary").innerHTML = hourlySummary;
  document.getElementById("dateAndTime").innerHTML   = dateAndTime;
  document.getElementById("currentGif").src = currentGif;
  // console.log(data);
}

function handleChange(input) {
  let checkVal = input.value;
}

function disableBtn(button) {
  document.getElementById(button).disabled = true;
}

function enableBtn(button) {
  document.getElementById(button).disabled = false;
}

function aClear(){
  document.getElementById('newLocation').value = 'Denver,CO';
}
