const cityid = "5604473";
const myId = "f6b72466de41a9b962d33a29f3f1e123";

const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${cityid}&appid=${myId}&units=imperial`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    const temp = document.querySelector('#current-temp');
    temp.textContent = jsObject.main.temp.toFixed(0);
    const currently = document.querySelector('#currently');
    const desc = jsObject.weather[0].description;
    currently.innerHTML = `<strong>${desc.toUpperCase()}</strong>`;

    const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById('imagesrc').textContent = imagesrc;
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });