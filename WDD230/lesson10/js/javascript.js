// ********************** NAVIGATION ****************/

const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

//footer details
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

//current date
const datefield = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.textContent = fulldate;

//display Pancake at the park only on Fridays
//if (now.getDay() == 5) {
//  document.querySelector('.banner').style.display = "block"
//}

//************************** STORAGE *****************/
let daysSinceLastVisit;

if (!localStorage.getItem('lastVisit')) {
  localStorage.setItem('lastVisit', now.getTime());
  document.querySelector('.visitedGallery').innerHTML = "Thank you for visiting our page! 🙏"
} else {
  let miliseconds = now.getTime() - localStorage.getItem('lastVisit');
  let oneDay = 1000 * 60 * 60 * 24;
  daysSinceLastVisit = Math.round(miliseconds/oneDay);
}

//document.getElementById("visits").innerHTML = daysSinceLastVisit;

/************************ FORM  *******************/
function adjustRange(range) {
  document.getElementById("rangeValue").innerHTML = range;
}

/************************ HOME  *******************/
const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject["towns"];
    const threeTowns = towns.filter(x => x.name == 'Preston' || x.name == 'Soda Springs' || x.name == 'Fish Haven');
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
        let card = document.createElement('section');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement('span');
        let pYear = document.createElement('p');
        let pPop = document.createElement('p');
        let pRain = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        pYear.textContent = 'Year Founded: ' + towns[i].yearFounded;
        pPop.textContent = 'Population: ' + towns[i].currentPopulation;
        pRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        img.setAttribute('src', 'images/' + towns[i].photo);
        img.setAttribute('alt', 'Town ' + (i+1) + ': ' + towns[i].name);

        div.appendChild(h2);
        div.appendChild(motto);
        div.appendChild(pYear);
        div.appendChild(pPop);
        div.appendChild(pRain);
        card.appendChild(div)
        card.appendChild(img);

        document.querySelector('div.towns').appendChild(card);
      }
        //doesnt do anything if not
    }
  });