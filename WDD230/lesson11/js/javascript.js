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
if (now.getDay() == 5) {
  document.querySelector('.banner').style.display = "block"
}

/************************ FORM  *******************/
function adjustRange(range) {
  document.getElementById("rangeValue").innerHTML = range;
}