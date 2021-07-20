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
          
          let icon = document.createElement('img');
          icon.setAttribute('src', 'images/' + dict[i].logo);
          icon.setAttribute('alt', dict[i].name.toLowerCase() + " logo");
          icon.setAttribute('loading', 'lazy');
          card.appendChild(icon);

          let h2 = document.createElement('h2');
          h2.textContent = dict[i].name;
          card.appendChild(h2);

          let info = document.createElement('div');
          let address = document.createElement('p');
          address.innerHTML = `<strong>Address: </strong>${dict[i].address}`;
          info.appendChild(address);

          let div = document.createElement('div');
          div.classList.add("telFlex")
          let tel = document.createElement('p');
          tel.innerHTML = `<strong>Tel: </strong>${dict[i].tel.stylized}`;
          let fixo = document.createElement('a');
          fixo.setAttribute('href', "tel:" + dict[i].tel.number);
          fixo.textContent = "CALL ☎";
          div.appendChild(tel);
          div.appendChild(fixo);
          if (dict[i].tel.type == "whatsapp") {
              let whatsapp = document.createElement('a');
              whatsapp.setAttribute('href', "https://wa.me/" + dict[i].tel.number);
              whatsapp.setAttribute('target', "_blank");
              whatsapp.textContent = "MESSAGE ✉";
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

    document.querySelector(".directoryAdd").classList.toggle("max3Columns");
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

/***************** CONTACT PAGE *********************/
if (document.querySelector(".activePage").textContent == `Contact Us`) {
  checkHQStatus();
} /*************end of contact page query**********/

/***************** DIRECTORY PAGE *********************/
if (document.querySelector(".activePage").textContent == `Directory`) {
  directoryAdd();
  console.table(document.querySelector(".directoryAdd").classList.length);
} /*************end of contact page query**********/

const dictFile1 =
    "https://ppedrovit01r.github.io/WDD230/deLightHarbor/directory.json";
   fetch(dictFile1)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject);
    });
