const PrestonId = "5604473";
const myId = "f6b72466de41a9b962d33a29f3f1e123";

const weatherURL = `http://api.openweathermap.org/data/2.5/weather?id=${PrestonId}&appid=${myId}&units=imperial`;
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
    document
      .getElementById("iconTemp")
      .setAttribute("alt", weather.weather[0].main);
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

const forecastURL = `http://api.openweathermap.org/data/2.5/forecast?id=${PrestonId}&appid=${myId}&units=imperial`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let forecast = jsObject;

    let ul = document.createElement("ul");

    for (let i = 1; i <= 5; i++) {
      let li = document.createElement("li");
      let day = document.createElement("h3");
      let icon = document.createElement("img");
      let desc = document.createElement("p");

      day.innerHTML = getWeekDay(dayOfWeek + i);
      let forecastDay = -1 + 8 * i;
      icon.setAttribute('src', `https://openweathermap.org/img/wn/${forecast.list[forecastDay].weather[0].icon}@2x.png`);
      desc.innerHTML = `${
        forecast.list[forecastDay].weather[0].main
      } <strong>${forecast.list[forecastDay].main.temp.toFixed(0)}&deg;F</strong>`;

      li.appendChild(day);
      li.appendChild(icon);
      li.appendChild(desc);
      ul.appendChild(li);
    }
    document.querySelector("div.forecast").appendChild(ul);
  });
