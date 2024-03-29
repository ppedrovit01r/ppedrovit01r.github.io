const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pDate = document.createElement('p');
        let pPlace = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        pDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        pPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        img.setAttribute('src', prophets[i].imageurl);
        img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + (i+1));

        card.appendChild(h2);
        card.appendChild(pDate);
        card.appendChild(pPlace);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);
    }
  });


