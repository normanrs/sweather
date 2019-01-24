var weatherAt = "Denver,CO";
var baseURL = 'https://stormy-depths-85632.herokuapp.com';

function getLocation(){
  weatherAt = document.getElementById('newLocation').value || weatherAt;
  // currentLocation.innerHTML = ( 'Current Weather in ' + weatherAt + '@ ' );
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

function makeWeather(data_in) {
  let data = data_in.data.attributes;
  let cityState = data.city_state;
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
  makeHourlies(data.hourlies);
  // makeDailies(data.dailies);
  document.getElementById("currentLocation").innerHTML = 'Current Weather in ' + cityState + ' for ';
  document.getElementById("currentTemp").innerHTML     = currentTemp + '°';
  document.getElementById("highLow").innerHTML         = 'High/Low: ' + highTemp + '/' + lowTemp;
  document.getElementById("feelsLike").innerHTML       = 'Feels Like: ' + feelsLike;
  document.getElementById("humidity").innerHTML        = 'Humidity: ' + humidity + '%';
  document.getElementById("uvIndex").innerHTML         = ' UV-Index: ' + uvIndex;
  document.getElementById("visibility").innerHTML      = ' Visibility: ' + visibility + 'mi';
  document.getElementById("dailySummary").innerHTML    = dailySummary;
  document.getElementById("hourlySummary").innerHTML   = hourlySummary;
  document.getElementById("dateAndTime").innerHTML     = dateAndTime;
  document.getElementById("currentGif").src = currentGif;
  console.log(data);

  function makeHourlies(array_in) {
    var count = 0;
    array_in.forEach(function(element) {
      count += 1;
      var hdr3 = document.createElement("h3");
      var temp = document.createTextNode(parseInt(element.temperature) + '°');
      hdr3.appendChild(temp);
      document.getElementById("hourlyTemp" + count).appendChild(hdr3);
      var para = document.createElement("span");
      var timeStamp = new Date(element.hour * 1000);
      var hour = document.createTextNode(timeStamp.toLocaleTimeString());
      para.appendChild(hour);
      document.getElementById("hourlyTime" + count).appendChild(para);
    });
  }
}

//   function makeDailies(array_in) {
//     var para = document.createElement("P");
//     var t = document.createTextNode("These are dailies.");
//     para.appendChild(t);
//     document.getElementById("dailies").appendChild(para);
//   }
//
// }

function aClear(){
  document.getElementById('newLocation').value = 'Denver,CO';
}
