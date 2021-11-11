//submit message
var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

const resume = [
  { menu: "resume__header__menu__about", card: "resume__about", icon: "0" },
  { menu: "resume__header__menu__resume", card: "resume__resume", icon: "1" },
  { menu: "resume__header__menu__works", card: "resume__works", icon: "2" },
  { menu: "resume__header__menu__blog", card: "resume__blog", icon: "3" },
  { menu: "resume__header__menu__contact", card: "resume__contact", icon: "4" },
];

const menu__about = document.getElementsByClassName("resume__header__menu__about")[0];
const menu__resume = document.getElementsByClassName("resume__header__menu__resume")[0];
const menu__works = document.getElementsByClassName("resume__header__menu__works")[0];
const menu__blog = document.getElementsByClassName("resume__header__menu__blog")[0];
const menu__contact = document.getElementsByClassName("resume__header__menu__contact")[0];

const cover__download = document.getElementsByClassName("resume__cover__download")[0];
const cover__contact = document.getElementsByClassName("resume__cover__contact")[0];

const resume__about = document.getElementsByClassName("resume__about")[0];
const resume__resume = document.getElementsByClassName("resume__resume")[0];
const resume__works = document.getElementsByClassName("resume__works")[0];
const resume__blog = document.getElementsByClassName("resume__blog")[0];
const resume__contact = document.getElementsByClassName("resume__contact")[0];


//TODO callback
// menu__about.addEventListener("click", function () {
//     showCard("resume__header__menu__about");
// });
// menu__resume.addEventListener("click", function () {
//     showCard("resume__header__menu__resume");
// });
// menu__works.addEventListener("click", function () {
//     showCard("resume__header__menu__works");
// });
// menu__blog.addEventListener("click", function () {
//     showCard("resume__header__menu__blog");
// });
// menu__contract.addEventListener("click", function () {
//     showCard("resume__header__menu__contract");
// });
menu__about.addEventListener("click", popabout);
menu__resume.addEventListener("click", popresume);
menu__works.addEventListener("click", popworks);
menu__blog.addEventListener("click", popblog);
menu__contact.addEventListener("click", popcontact);
cover__contact.addEventListener("click", popcontact);
cover__download.addEventListener("click", popresume);

//TODO
function showCard(item) {
    document.getElementsByClassName(item).style.display = "none";
    console.log(`${item} is clicked`);
    for (let i of resume) {
    //todo --impact to animation
    console.log(typeof i.menu + typeof item);
    menu.display = i === item ? "inline" : "none";
    document.getElementsByClassName("link")[i.icon].style.color = i === item ? "#65dfc9" : "#426696";
    document.getElementsByClassName("fas")[i.icon].style.color = i === item ? "#65dfc9" : "#426696";
  }
}

function show(callback) {
  callback();
}

function popabout() {
  document.getElementsByClassName("link")[0].style.color = "#65dfc9";
  document.getElementsByClassName("fas")[0].style.color = "#65dfc9";
  document.getElementsByClassName("link")[1].style.color = "#426696";
  document.getElementsByClassName("fas")[1].style.color = "#426696";
  document.getElementsByClassName("link")[2].style.color = "#426696";
  document.getElementsByClassName("fas")[2].style.color = "#426696";
  document.getElementsByClassName("link")[3].style.color = "#426696";
  document.getElementsByClassName("fas")[3].style.color = "#426696";
  document.getElementsByClassName("link")[4].style.color = "#426696";
  document.getElementsByClassName("fas")[4].style.color = "#426696";
  resume__resume.style.display = "none";
  resume__works.style.display = "none";
  resume__blog.style.display = "none";
  resume__contact.style.display = "none";
  resume__about.style.display = "inline";
}

function popresume() {
  document.getElementsByClassName("link")[1].style.color = "#65dfc9";
  document.getElementsByClassName("fas")[1].style.color = "#65dfc9";
  document.getElementsByClassName("link")[0].style.color = "#426696";
  document.getElementsByClassName("fas")[0].style.color = "#426696";
  document.getElementsByClassName("link")[2].style.color = "#426696";
  document.getElementsByClassName("fas")[2].style.color = "#426696";
  document.getElementsByClassName("link")[3].style.color = "#426696";
  document.getElementsByClassName("fas")[3].style.color = "#426696";
  document.getElementsByClassName("link")[4].style.color = "#426696";
  document.getElementsByClassName("fas")[4].style.color = "#426696";
  resume__about.style.display = "none";
  resume__works.style.display = "none";
  resume__blog.style.display = "none";
  resume__contact.style.display = "none";
  resume__resume.style.display = "inline";
}

function popworks() {
  document.getElementsByClassName("link")[2].style.color = "#65dfc9";
  document.getElementsByClassName("fas")[2].style.color = "#65dfc9";
  document.getElementsByClassName("link")[0].style.color = "#426696";
  document.getElementsByClassName("fas")[0].style.color = "#426696";
  document.getElementsByClassName("link")[1].style.color = "#426696";
  document.getElementsByClassName("fas")[1].style.color = "#426696";
  document.getElementsByClassName("link")[3].style.color = "#426696";
  document.getElementsByClassName("fas")[3].style.color = "#426696";
  document.getElementsByClassName("link")[4].style.color = "#426696";
  document.getElementsByClassName("fas")[4].style.color = "#426696";
  resume__about.style.display = "none";
  resume__resume.style.display = "none";
  resume__blog.style.display = "none";
  resume__contact.style.display = "none";
  resume__works.style.display = "inline";
}

function popblog() {
  document.getElementsByClassName("link")[3].style.color = "#65dfc9";
  document.getElementsByClassName("fas")[3].style.color = "#65dfc9";
  document.getElementsByClassName("link")[0].style.color = "#426696";
  document.getElementsByClassName("fas")[0].style.color = "#426696";
  document.getElementsByClassName("link")[1].style.color = "#426696";
  document.getElementsByClassName("fas")[1].style.color = "#426696";
  document.getElementsByClassName("link")[2].style.color = "#426696";
  document.getElementsByClassName("fas")[2].style.color = "#426696";
  document.getElementsByClassName("link")[4].style.color = "#426696";
  document.getElementsByClassName("fas")[4].style.color = "#426696";
  resume__about.style.display = "none";
  resume__resume.style.display = "none";
  resume__works.style.display = "none";
  resume__contact.style.display = "none";
  resume__blog.style.display = "inline";
}

function popcontact() {
  document.getElementsByClassName("link")[4].style.color = "#65dfc9";
  document.getElementsByClassName("fas")[4].style.color = "#65dfc9";
  document.getElementsByClassName("link")[0].style.color = "#426696";
  document.getElementsByClassName("fas")[0].style.color = "#426696";
  document.getElementsByClassName("link")[1].style.color = "#426696";
  document.getElementsByClassName("fas")[1].style.color = "#426696";
  document.getElementsByClassName("link")[2].style.color = "#426696";
  document.getElementsByClassName("fas")[2].style.color = "#426696";
  document.getElementsByClassName("link")[3].style.color = "#426696";
  document.getElementsByClassName("fas")[3].style.color = "#426696";
  resume__about.style.display = "none";
  resume__resume.style.display = "none";
  resume__blog.style.display = "none";
  resume__works.style.display = "none";
  resume__contact.style.display = "inline";
}
