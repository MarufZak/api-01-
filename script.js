const body = document.querySelector('body');
var msg = `Sorry, we were unable to get your location.`;

if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success,fail);
    body.textContent = 'Определение местонахождения...';
  } else {
    body.textContent = msg;
  }

function success(position) {
    msg = `<h3>Longtitude: ${position.coords.latitude}</h3>
    <h4>Latitude: ${position.coords.longitude}</h4>`
    body.innerHTML = msg;
}

function fail() {
    body.innerHTML = msg;
    console.log(msg.code);
}