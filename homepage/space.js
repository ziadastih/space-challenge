// =======create a function for each class toggle and menu and closing
const toggleImage = document.querySelector(".toggle-image");
const close = document.querySelector(".close");
const navMenu = document.querySelector(".nav-menu");

//give the function you want for every class and also add a new class which you will style in a simple way in css by giving transform and translate!!!!!!!!!!!!!!!!!

toggleImage.addEventListener("click", () => {
  navMenu.classList.add("open-menu");
});

// =========same function change class names and instead of 'add' set remove so it close
close.addEventListener("click", () => {
  navMenu.classList.remove("open-menu");
});
