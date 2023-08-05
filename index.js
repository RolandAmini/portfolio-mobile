const hamburgerBtn = document.getElementById("hamburger-btn");
const closeBtn = document.getElementById("close-btn");
const mobileMenu = document.querySelector(".nav-menu");
const emailInput = document.getElementById("userEmail");

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

const navLinks = document.querySelectorAll("nav ul li a");
const navMenu = document.querySelector("nav ul");

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {
        
      mobileMenu.style.display = "none";
      hamburgerBtn.style.display = "block";
      closeBtn.style.display = "none";
    });
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

  
  const errorMessage = document.getElementById("error-message");
  const fullname = document.querySelector('#fullname');

  const email = emailInput.value.trim();

  // validate email to not be in lowercase1
  if (email === email.toLowerCase()) {
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Please use lowercase letters";
  }

  // local storage
  const formData = {
    email: emailInput.value,
    name: fullname.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));

  document.getElementById("userEmail").value="";
  document.getElementById("message").value="";
  document.querySelector('#fullname').value="";

});

// Receive data from local-storage
window.onload = () => {
const formData = localStorage.getItem("formData");
if (formData) {
  // Check if the data exists
  const formDataObject = JSON.parse(formData);
  if (fullname) fullname.value = formDataObject.name || "";
  if (emailInput) emailInput.value = formDataObject.email || "";
}
};


