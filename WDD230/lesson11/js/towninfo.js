/************************ HOME  *******************/
const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
        let a = document.createElement('a');
        let card = document.createElement('section');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let motto = document.createElement('span');
        let pYear = document.createElement('p');
        let pPop = document.createElement('p');
        let pRain = document.createElement('p');
        let img = document.createElement('img');

        a.setAttribute('href', towns[i].name.replace(/\s+/g, '').toLowerCase() + '.html');
        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        pYear.textContent = 'Year Founded: ' + towns[i].yearFounded;
        pPop.textContent = 'Population: ' + towns[i].currentPopulation;
        pRain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        img.setAttribute('src', 'images/' + towns[i].photo);
        img.setAttribute('alt', 'Town ' + (i+1) + ': ' + towns[i].name);
        img.setAttribute('loading', 'lazy');

        div.appendChild(h2);
        div.appendChild(motto);
        div.appendChild(pYear);
        div.appendChild(pPop);
        div.appendChild(pRain);
        card.appendChild(div)
        card.appendChild(img);
        a.appendChild(card);

        document.querySelector('div.towns').appendChild(a);
      }
        //doesnt do anything if not
    }
  });