/***************** FUNCTIONS *********************/
function toggleMenu(x) /* Toggles the Navigation bar */ {
  x.classList.toggle("change");
  document.querySelector("header").classList.toggle("responsive");
}

function DateBrazil() /* Gets the time in Porto Alegre, Brazil */ {
  let d = new Date();
  if (d.getTimezoneOffset() != 180) {
    utc = d.getTime() + d.getTimezoneOffset() * 60000;
    let nd = new Date(utc + 3600000 * -3); // (-3) is the time in Brazil
    return nd; // return time as a string
  } else {
    return d;
  }
}

function checkHQStatus() /* Displays if we're inside working hours (7AM-7PM) */ {
  let d = DateBrazil();
  if (d.getDay() != 0 && d.getHours() >= 7 && d.getHours() < 19) {
    document.querySelector("#hqStatus").textContent = "Open";
    document.querySelector("#hqStatus").classList.add("addGreen");
  } else {
    document.querySelector("#hqStatus").textContent = "Closed";
    document.querySelector("#hqStatus").classList.add("addRed");
  }
}

function directoryAdd() /* Building content from JSON data source */ {
   const dictFile =
    "https://ppedrovit01r.github.io/WDD230/deLightHarbor/directory.json";
   fetch(dictFile)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const dict = jsonObject["directory"];
      for (let i = 0; i < dict.length; i++) {
          let card = document.createElement('div');
          card.classList.add("listView");
          
          /*let icon = document.createElement('img');
          icon.setAttribute('src', 'images/directory/' + dict[i].logo);
          icon.setAttribute('alt', dict[i].name.toLowerCase() + " logo");
          icon.setAttribute('loading', 'lazy');
          card.appendChild(icon);*/

          let largePic = document.createElement('img');
          largePic.setAttribute('src', 'images/directory/HD' + dict[i].logo);
          largePic.setAttribute('alt', dict[i].name.toLowerCase() + " HD logo");
          largePic.setAttribute('loading', 'lazy');
          largePic.classList.add("dissapear");
          card.appendChild(largePic);

          let info = document.createElement('div');
          let h2 = document.createElement('h2');
          h2.textContent = dict[i].name;
          info.appendChild(h2);

          
          let address = document.createElement('p');
          address.innerHTML = `<strong>Address: </strong>${dict[i].address}`;
          info.appendChild(address);

          let div = document.createElement('div');
          div.classList.add("telFlex")
          let tel = document.createElement('p');
          tel.innerHTML = `<strong>Tel: </strong>${dict[i].tel.stylized}`;
          let fixo = document.createElement('a');
          fixo.setAttribute('href', "tel:" + dict[i].tel.number);
          fixo.innerHTML = `<i class="fas fa-phone-alt"></i>`;
          div.appendChild(tel);
          div.appendChild(fixo);
          if (dict[i].tel.type == "whatsapp") {
              let whatsapp = document.createElement('a');
              whatsapp.setAttribute('href', "https://wa.me/" + dict[i].tel.number);
              whatsapp.setAttribute('target', "_blank");
              whatsapp.innerHTML = `<i class="fab fa-whatsapp"></i>`;
              whatsapp.setAttribute('class', "addWPP");
              div.appendChild(whatsapp);
          }
          info.appendChild(div);
          card.appendChild(info);

          let site = document.createElement('p');
          site.innerHTML = `<strong><a target="_blank" href="${dict[i].link}">Check their website</a></strong>`;
          card.appendChild(site);
          
          document.querySelector('div.directoryAdd').appendChild(card);
      }
    });
}

function toggleDirectory(x) /* Toggles the Directory from List View to Grid View */ {
    x.classList.remove("icon-unactive");
    document.querySelector(".icon-active").setAttribute('onclick', "toggleDirectory(this)");
    document.querySelector(".icon-active").classList.add("icon-unactive");
    document.querySelector(".icon-active").classList.remove("icon-active");
    x.removeAttribute('onclick', "toggleDirectory(this)");
    x.classList.add("icon-active");

    document.querySelector(".directoryAdd").classList.toggle("max4Columns");
    if (document.querySelector(".directoryAdd").classList.length > 1) /*means it has changed to GridView*/{
        for (let i = 0; i < 8; i++) {
            document.querySelector(".listView").classList.add("gridView");
            document.querySelector(".listView").classList.remove("listView");
        }
    } else /*it has changed to ListView*/{
        for (let i = 0; i < 8; i++) {
            document.querySelector(".gridView").classList.add("listView");
            document.querySelector(".gridView").classList.remove("gridView");
        }
    }
}

function weatherOneCall() /* Displays weather information */ {
  const myId = "f6b72466de41a9b962d33a29f3f1e123";
  const POAlat = -30.03;
  const POAlon = -51.23;
  let exclusion = "rain,minutely,hourly"
  const weatherURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${POAlat}&lon=${POAlon}&exclude=${exclusion}&appid=${myId}`;
  fetch(weatherURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let weather = jsObject

    let tC = weather.current.temp - 273.15;
    let feelC = weather.current.feels_like - 273.15;
    let desc = weather.current.weather[0].description;
    let icon = weather.current.weather[0].icon;
    let humidity = weather.current.humidity;

    

    let titleLabel = document.createElement('div');
    titleLabel.classList.add("tempTitleLabel");
    let date = document.createElement('p');
    date.textContent = DateBrazil();
    titleLabel.appendChild(date);
    let h1 = document.createElement('h1');
    h1.textContent = "Porto Alegre, BR";
    titleLabel.appendChild(h1);
    let titleBar = document.createElement('div');
    let unitChange = document.createElement('h2');
    unitChange.classList.add("unitChange");
    unitChange.innerHTML = `&#176;C`;
    titleBar.appendChild(titleLabel);
    titleBar.appendChild(unitChange);
    document.querySelector('.weather-info').appendChild(titleBar);

    let weatherLabel = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`);
    img.setAttribute('alt', desc);
    img.setAttribute('loading', 'lazy');
    let h2 = document.createElement('h2');
    h2.innerHTML = `${tC.toFixed(0)}&#176;C`;
    h2.classList.add(tC);
    weatherLabel.appendChild(img);
    weatherLabel.appendChild(h2);
    document.querySelector('.weather-info').appendChild(weatherLabel);

    let p = document.createElement('p');
    p.innerHTML = `Feels like <span class="feelC">${feelC.toFixed(0)}&#176;C</span> with ${desc}.<br>Humidity: ${humidity}%`;
    document.querySelector('.weather-info').appendChild(p);


    if (weather.length == 8) {
      let alertTitleLabel = document.createElement('div');
      alertTitleLabel.classList.add("alertTitleLabel");
      let alertTitle = document.createElement('h1');
      alertTitle.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ` + weather.alerts[0].event;
      let closeButton = document.createElement('i');
      closeButton.classList.add("fas");
      closeButton.classList.add("fa-times");
      closeButton.setAttribute('onclick', "closeAlert()");
      let alertDesc = document.createElement('p');
      alertDesc.textContent = weather.alerts[0].description;
      document.querySelector('.alertBox').appendChild(alertTitleLabel);
      document.querySelector('.alertTitleLabel').appendChild(alertTitle);
      document.querySelector('.alertTitleLabel').appendChild(closeButton);
      document.querySelector('.alertBox').appendChild(alertDesc);
      document.querySelector('.alertBox').style.display = "flex";
    } 
    
    let forecast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.innerHTML = "3=day forecast";
    let ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
      let li = document.createElement('li');
      li.classList.add("forecastItem");
      let 
      
    }


    let threeDayForecast = 4;

    let tempC = new Array(tC, feelC, );
    return tempC
  });
}

function getWeekMonthDay(date) {
  switch (date.getDay()) {
    case 0:
      let week = "Sun";
      break;
    case 1:
      let week = "Mon";
      break;
    case 2:
      let week = "Tue";
      break;
    case 3:
      let week = "Wed";
      break;
    case 4:
      let week = "Thu";
      break;
    case 5:
      let week = "Fri";
      break;
    default:
      let week = "Sat"
      break;
  }
}

function closeAlert() {
  document.querySelector('.alertBox').style.display = "none";
}

/***************** CONTACT PAGE *********************/
if (document.querySelector(".activePage").textContent == `Contact Us`) {
  checkHQStatus();
} /*************end of contact page query**********/

/***************** DIRECTORY PAGE *********************/
if (document.querySelector(".activePage").textContent == `Directory`) {
  directoryAdd();
  console.table(document.querySelector(".directoryAdd").classList.length);
} /*************end of contact page query**********/

/***************** HOMEPAGE *********************/
if (document.querySelector("title").textContent == `deLight Harbor | Home`) {
  let tempK = weatherOneCall();
} /*************end of contact page query**********/

