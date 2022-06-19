// =====nav bar functionality=========

const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelector(".open-btn");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const homePage = document.getElementById("home");

// arrrays of bg
const bgs = [
  {
    home: "./background-home-mobile.jpg",
  },
  {
    destination: "./background-destination-mobile.jpg",
  },
  {
    crew: "./background-crew-tablet.jpg",
  },
  {
    technology: "./background-technology-tablet.jpg",
  },
];

// when page load we want homepage container displayed
window.addEventListener("DOMContentLoaded", function () {
  homePage.classList.add("open-container");
});
// =====event listener for open-btn and close-btn
openBtn.addEventListener("click", function () {
  navMenu.classList.add("open-menu");
  closeBtn.addEventListener("click", function () {
    navMenu.classList.remove("open-menu");
  });
});

// ============= nav bar get items by id ===============
navLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    let element = e.target.parentElement.dataset.id;

    navLink.forEach(function (item) {
      if (item !== link) {
        item.classList.remove("selected");
      }

      link.classList.add("selected");
    });
  });
});

// ==========DESTINATION PAGE==========

// ARRAY OF OBJECTS

const planets = [
  {
    image: "../destination/image-moon.png",
    title: "MOON",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
  },
  {
    image: "../destination/image-mars.png",
    title: "MARS",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. km",
    time: "9 months",
  },
  {
    image: "../destination/image-europa.png",
    title: "EUROPA",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. km",
    time: "3 years",
  },
  {
    image: "../destination/image-titan.png",
    title: "TITAN",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. km",
    time: "7 years",
  },
];

const planetNav = document.querySelectorAll(".planet");
const title = document.querySelector(".planet-title");
const text = document.querySelector(".text");
const img = document.querySelector(".image");
const distance = document.querySelector(".distance");
const time = document.querySelector(".time");

// ========planet navigation functionality======
planetNav.forEach(function (planet) {
  planet.addEventListener("click", function (i) {
    // =======traversing dom using the dataset id
    let element = i.target.parentElement.dataset.id;

    let number = parseInt(element);
    currentPlanet = planets[number];
    img.src = currentPlanet.image;
    title.textContent = currentPlanet.title;
    text.textContent = currentPlanet.text;
    distance.textContent = currentPlanet.distance;
    time.textContent = currentPlanet.time;
    // ====selected class=========
    planetNav.forEach(function (item) {
      if (item !== planet) {
        item.classList.remove("selected");
      }
      planet.classList.add("selected");
    });
  });
});
