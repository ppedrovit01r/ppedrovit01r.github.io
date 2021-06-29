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

document.getElementById("visits").innerHTML = daysSinceLastVisit;