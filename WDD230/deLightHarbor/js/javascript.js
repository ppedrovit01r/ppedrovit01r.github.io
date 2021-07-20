/***************** FUNCTIONS *********************/
function toggleMenu(x) /* Toggles the Navigation bar */ {
    x.classList.toggle("change");
    document.querySelector("header").classList.toggle("responsive");
}

function DateBrazil() /* Gets the time in Porto Alegre, Brazil */{
    let d = new Date();
    if (d.getTimezoneOffset() != 180) {
        utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc + (3600000*(-3))); // (-3) is the time in Brazil
        return nd; // return time as a string
    } else {return d;}
}

function checkHQStatus() /* Displays if we're inside working hours (7AM-7PM) */ {
    let d = DateBrazil();
    if (d.getDay() != 0 && d.getHours()>=7 && d.getHours()<19) {
        document.querySelector("#hqStatus").textContent = "Open";
        document.querySelector("#hqStatus").classList.add("addGreen");
    } else {
        document.querySelector("#hqStatus").textContent = "Closed";
        document.querySelector("#hqStatus").classList.add("addRed");
    }
}



/***************** CONTACT PAGE *********************/
if (document.querySelector(".activePage").textContent == `Contact Us`) {
    checkHQStatus();
} /*************end of contact page query**********/

/***************** city PAGE *********************/
if (document.querySelector(".activePage").textContent == `Porto Alegre`) {
    lightGallery(document.getElementById('lightgallery'));
} /*************end of contact page query**********/

console.log(DateBrazil());