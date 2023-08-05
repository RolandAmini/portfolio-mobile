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

const projectDetails = [
  {
    id: 1,
    name: "Roland change",
    description:
      "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list.",
    featuredImageUrl: "pop-up-img2.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "#",
    sourceURL: "#",
  },
  {
    id: 2,
    name: "amani-fest",
    description:
      "Amani-fest is a project to design a platform for Amani Festival which is the annual festival where people get united to sing, dance, and proclaim peace. Take place in February every year in Goma Town/DRCongo. With this platform you will get all information about the Festival, and even book the ticket for the event.",
    featuredImageUrl: "pop-up-img2.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "#",
    sourceURL: "#",
  },
  {
    id: 3,
    name: "Math Magician",
    description:
      "Math magicians is a website for all fans of mathematics, where people can Make simple calculations and read a random math-related quote.",
    featuredImageUrl: "pop-up-img2.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "#",
    sourceURL: "#",
  },
  {
    id: 4,
    name: "The Meal",
    description:
      "This is a web application that allows you to get information about various kinds of meals and recipes from all over the world. Using, MealzDB you can get information about various meals and recipes from all over the world",
    featuredImageUrl: "pop-up-img2.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "#",
    sourceURL: "#",
  },
  {
    id: 5,
    name: "mi_bugdet ",
    description:
      "It's a apps to help you out to manage your bugdet whereby you ca n Add a category and transactions that belongs to that category. ",
    featuredImageUrl: "pop-up-img2.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "#",
    sourceURL: "#",
  },
  {
    id: 6,
    name: "Bob's Gurger Anime ",
    description:
      "It's a mobile web application to display the list of characters for the Bob's Gurger Anime show. Fetcher from the Bob's Burger API",
    featuredImageUrl: "pop-up-img2.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "#",
    sourceURL: "#",
  },
];

const popUpCallback = (id) => {
  const project = projectDetails.find((project) => project.id === +id);

  return `
  <div id="popblur"></div>
  <div class="pop-up" id="popup">
  <div class="pop-container">
    <div class="pop-up2">
      <button class="button-pop" type="button"  onclick="closePopup()"><i class="fa-solid fa-xmark"></i></button>
    </div>
   
    <img class="pop-img" src="${project.featuredImageUrl}"> 
    <h2 class="pop-h2">${project.name}</h2>

      <div class="pop-fin">
        
        <a href="${
          project.liveVersion
        }" class="POP-BTN">See live <i class="fa-light fa-timer"></i></a>
        <a href="${
          project.sourceURL
        }" class="POP-BTN">See source <i class="fa-brands fa-github"></i></a>
      </div>
      
    <ul class="pop-skills">
      ${project.technologies
        .map((tech) => `<li class="skills-up">${tech}</li>`)
        .join("")}
    </ul>
   <p class="par-pop">${project.description} </p>

  </div>

</div>  
  `;
};

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenu.style.display = "none";
  hamburgerBtn.style.display = "block";
  closeBtn.style.display = "none";
});

const navLinks = document.querySelectorAll("nav ul li a");
const navMenu = document.querySelector("nav ul");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileMenu.style.display = "none";
    hamburgerBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
});

const cardPopUpContainer = document.querySelector(".popUpDynamic");
function openPopup(id) {
  const popUpHTMLStr = popUpCallback(id);
  cardPopUpContainer.insertAdjacentHTML("beforeend", popUpHTMLStr);
}

function closePopup() {
  cardPopUpContainer.textContent = "";
}

const userEmail = document.getElementById("userEmail");

const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const errorMessage = document.getElementById("error-message");
  const fullname = document.querySelector("#fullname");

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

  localStorage.setItem("formData", JSON.stringify(formData));

  document.getElementById("userEmail").value = "";
  document.getElementById("message").value = "";
  document.querySelector("#fullname").value = "";
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

// pop up and cards

const cardContainer = document.querySelector("#cards");

cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-skill")) {
    openPopup(e.target.id);
  }
});

projectDetails.forEach((el) => {
  cardContainer.innerHTML += `
  <div class="card">
  <img src="project-img.png" alt="project">
  <div class="card-content">
    <h2 class="card-title">${el.name}</h2>
    <ul class="skills">
      ${el.technologies
        .map((lang) => `<li class="skill">${lang} </li>`)
        .join("")}
    </ul>
    <button class="btn btn-skill" id="${el.id}">See Project</button> 
  </div>
</div>
  `;
});

