
const header = document.querySelector(".header")
const burger = header.querySelector(".burger_menu")
const burgerIcon = header.querySelector(".burger_menu_icon")


console.log(header);
console.log(burger);
console.log(burgerIcon);


burger.addEventListener("click", function() {
  header.classList.toggle("header-mobile");

  if (header.classList.contains("header-mobile")){
    burgerIcon.src="images/Vector.svg"

  }else{
    burgerIcon.src=" images/Ham.png"

  }




  
})
