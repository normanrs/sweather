// This file is in the entry point in your webpack config.
var weatherAt = 1;

function newLocation(){
  weatherAt = document.getElementById('newLocation').value || weatherAt;
  coords = getCoords();
  currentLocation.innerHTML = ( 'Current Location: ' + weatherAt );
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
