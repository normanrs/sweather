var weatherAt = "Denver,CO";
var baseURL = 'https://stormy-depths-85632.herokuapp.com';

function getLocation(){
  weatherAt = document.getElementById('newLocation').value || weatherAt;
  // formmatedLoc = verifyLoc(weatherAt);
  currentLocation.innerHTML = ( 'Current Location: ' + weatherAt );
  sweatherAPIFetch(weatherAt) ;
  // console.log( sweatherAPIFetch(weatherAt) );

}

function sweatherAPIFetch(loc) {
  // return fetch(baseURL + '/api/v1/forecast?location=' + loc).then(function(response) {
  //   return response.json();})
  var request = new XMLHttpRequest();
  var url = 'https://stormy-depths-85632.herokuapp.com/api/v1/forecast?location='
  request.open('GET', url + loc, true);
  request.onload = function () {
    var data = JSON.parse(this.responseText);
    formatData(data);
  }
  request.send();
}

function formatData(data) {
  var formatted = data.data.attributes
  currentTemp.innerHTML  = parseInt(formatted.current_temp);
  highTemp.innerHTML     = parseInt(formatted.high_temp);
  lowTemp.innerHTML      = parseInt(formatted.lowTemp);
  feelsLike.innerHTML      = parseInt(formatted.feels_like);
  humidity.innerHTML      = parseInt(formatted.humidity);
  uvIndex.innerHTML      = parseInt(formatted.uv_index);
  visibility.innerHTML      = parseInt(formatted.visibility);
  dailySummary.innerHTML = formatted.daily_summary;
  hourlySummary.innerHTML = formatted.hourly_summary;
  dateAndTime.innerHTML  = formatted.date_and_time;
  dateAndTime.innerHTML  = formatted.date_and_time;
  console.log(formatted);
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
