const PrestonId = "5604473";
const SodaSpringsId = "5607916";
const FishHavenId = "5593814"; //I got the Id for Garden City as it appears not to have an Id for Fish Haven
const myId = "f6b72466de41a9b962d33a29f3f1e123";
let TownId = ""; let TownNumber = "";

const townName = document.querySelector('.active').textContent;
//console.log(townName);
switch (townName) {
  case 'PRESTON':
    TownId = PrestonId;
    TownNumber = 6;
    break;
  case 'SODA SPRINGS':
    TownId = SodaSpringsId;
    TownNumber = 0;
    break;
  case 'FISH HAVEN':
    TownId = FishHavenId;
    TownNumber = 2;
    break;
  default:
    break;
}

/************************ WEATHER SUMMARY *******************/
const weatherURL = `https://api.openweathermap.org/data/2.5/weather?id=${TownId}&appid=${myId}&units=imperial`;
fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let weather = jsObject;

    let t = weather.main.temp;
    let s = weather.wind.speed;
    const windChill = document.querySelector("#windChill");
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
    document.querySelector("#currentTemp").innerHTML = `${t.toFixed(0)}&deg;F`;
    document.querySelector("#currentDesc").innerHTML = weather.weather[0].main;
    document.querySelector("#humidity").innerHTML = `${weather.main.humidity}%`;
    document.querySelector("#windSpeed").innerHTML = `${s.toFixed(1)} mph`;

    const imagesrc = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
    document.getElementById("iconTemp").setAttribute("src", imagesrc);
    document.getElementById("iconTemp").setAttribute("alt", weather.weather[0].main);
    document.getElementById("iconTemp").setAttribute("loading", "lazy");
  });

//get day of the week
let dayOfWeek = new Date().getDay();

function getWeekDay(dayOfWeek) {
  let weekdays = new Array(
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu"
  );
  return weekdays[dayOfWeek];
}

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${TownId}&appid=${myId}&units=imperial`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    let forecast = jsObject;

    let ul = document.createElement("ul");

    let forecast18pm = forecast.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
    //console.log(forecast18pm);

    for (let i = 0; i < 5; i++) {
      let li = document.createElement("li");
      let day = document.createElement("h3");
      let icon = document.createElement("img");
      let desc = document.createElement("p");

      day.innerHTML = getWeekDay(1 + dayOfWeek + i);
      icon.setAttribute('src', `https://openweathermap.org/img/wn/${forecast18pm[i].weather[0].icon}@2x.png`);
      icon.setAttribute('alt', forecast18pm[i].weather[0].main)
      icon.setAttribute('loading', "lazy");
      desc.innerHTML = `${
        forecast18pm[i].weather[0].main
      } <strong>${forecast18pm[i].main.temp.toFixed(0)}&deg;F</strong>`;

      li.appendChild(day);
      li.appendChild(icon);
      li.appendChild(desc);
      ul.appendChild(li);
    }
    document.querySelector("div.forecast").appendChild(ul);
  });

/************************ TOWN NEWS  *******************/
const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject["towns"];
    let ul = document.createElement("ul");
    for (let i = 0; i < towns[TownNumber].events.length; i++) {
      let li = document.createElement("li");

      li.innerHTML = towns[TownNumber].events[i];

      ul.appendChild(li);
    }
    document.querySelector("#townNews").appendChild(ul);
  });