const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.style.display = "block";
  hamburgerBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.style.display = "none";
  hamburgerBtn.style.display = "block";
  closeBtn.style.display = "none";
  
});

 const popblur = document.getElementById("popblur");
function openPopup() {
  popup.classList.add("open-pop-up");
  popblur.style.display = "block";
}

function closePopup() {
  popup.classList.remove("open-pop-up");
  popblur.style.display = "none";
}

const userEmail = document.getElementById("userEmail");

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("userEmail");
  const errorMessage = document.getElementById("error-message");

  const email = emailInput.value.trim();

  // validate email to not be in lowercase
  if (email === email.toLowerCase()) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please use lowercase letters";
  }
});
