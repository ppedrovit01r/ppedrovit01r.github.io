//const PrestonId = "5604473";
//const myId = "f6b72466de41a9b962d33a29f3f1e123";

const forecastURL = `http://api.openweathermap.org/data/2.5/forecast?id=${PrestonId}&appid=${myId}&units=imperial`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    

    let t = jsObject.main.temp;
    let s = jsObject.wind.speed;
    const windChill = document.querySelector('#windChill');
    if (t <= 50 && s > 3) {
    output =
        35.74 +
        0.6215 * t -
        35.75 * Math.pow(s, 0.16) +
        0.4275 * t * Math.pow(s, 0.16);
    output = Math.round(output) + "&deg;F";
    } else {
    output = `N/A`;
    }
    //output
    windChill.innerHTML = output;
    document.querySelector('#currentTemp').innerHTML = `${t.toFixed(0)} &deg;F`;
    document.querySelector('#currentDesc').innerHTML = jsObject.weather[0].main;
    document.querySelector('#humidity').innerHTML = `${jsObject.main.humidity}%`;
    document.querySelector('#windSpeed').innerHTML = `${s.toFixed(1)} mph`

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('iconTemp').setAttribute('src', imagesrc);
    document.getElementById('iconTemp').setAttribute('alt', jsObject.weather[0].main);
  });

