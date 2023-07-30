// const navicon = document.querySelector("#nav-icon");
const navmenu = document.querySelector(".nav-menu");
// const closeIcon = document.querySelector("#close-icon");



// function showMobileMenu() {
//   navmenu.classList.add("show-menu");
// }


// function hideMobileMenu() {
//   navmenu.classList.remove("show-menu");
// }


// navicon.addEventListener("click", (e) => {
//   e.preventDefault();
//   showMobileMenu();
// });

// closeIcon.addEventListener("click", (e) => {
//   e.preventDefault();
//   hideMobileMenu();
// });


// const mobileMenuLinks = document.querySelectorAll(".nav-menu a");
// mobileMenuLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     hideMobileMenu();
//   });
// });

// function myFunction(x) {
//   x.classList.toggle("change");
  
// }



let popup = document.getElementById('popup');
function openPopup(){
  popup.classList.add('open-pop-up');
}
console.log ('123')
function closePopup(){
  popup.classList.remove('open-pop-up');
}

const userEmail = document.getElementById('userEmail');




FormData.addEventListener('submit' , (e) => { 

  const errors = [];

  if (userEmail.value.trim() === ''){
    errors.push("valide email required")
  }

  if (errors.length > 0){
    e.preventDefault();
    errorMessage.toggleAttributte('hidden');
    errorMessage.innerHTML = errors.join(', ');

  }
}) 

const myForm = document.getElementById('myForm');

myForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const email =document.getElementById("userEmail")
  const errorMessage = document.getElementById("error-message");

  console.log("submited")

})

