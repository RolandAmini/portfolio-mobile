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

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    mobileMenu.style.display = "none";
    hamburgerBtn.style.display = "block";
    closeBtn.style.display = "none";
  });
});

const projectDetails = [
  {
    id: 1,
    name: "Roland change",
    description:
      "Awesome books is a simple website that displays a list of books and allows you to add and remove books from that list.",
    featuredImageUrl: "images/awesome-books.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "https://bateyjosue.github.io/awesome-books/",
    sourceURL: "https://github.com/Bateyjosue/awesome-books",
  },
  {
    id: 2,
    name: "amani-fest",
    description:
      "Amani-fest is a project to design a platform for Amani Festival which is the annual festival where people get united to sing, dance, and proclaim peace. Take place in February every year in Goma Town/DRCongo. With this platform you will get all information about the Festival, and even book the ticket for the event.",
    featuredImageUrl: "./images/amani.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "https://amani-fest-jb.netlify.app/",
    sourceURL: "https://github.com/Bateyjosue/amani-fest",
  },
  {
    id: 3,
    name: "Math Magician",
    description:
      "Math magicians is a website for all fans of mathematics, where people can Make simple calculations and read a random math-related quote.",
    featuredImageUrl: "./images/math.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "https://math-magician-jb.netlify.app/",
    sourceURL: "https://github.com/Bateyjosue/math_magician",
  },
  {
    id: 4,
    name: "The Meal",
    description:
      "This is a web application that allows you to get information about various kinds of meals and recipes from all over the world. Using, MealzDB you can get information about various meals and recipes from all over the world",
    featuredImageUrl: "./images/meals.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "https://bateyjosue.github.io/The-Meal/",
    sourceURL: "https://github.com/Bateyjosue/The-Meal",
  },
  {
    id: 5,
    name: "mi_bugdet ",
    description:
      "It's a apps to help you out to manage your bugdet whereby you ca n Add a category and transactions that belongs to that category. ",
    featuredImageUrl: "./images/budget.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "https://www.loom.com/share/7b1e4eb40a95466a81104a080ffe2042",
    sourceURL: "https://github.com/Bateyjosue/mi_bugdet",
  },
  {
    id: 6,
    name: "Bob's Gurger Anime ",
    description:
      "It's a mobile web application to display the list of characters for the Bob's Gurger Anime show. Fetcher from the Bob's Burger API",
    featuredImageUrl: "./images/bob.png",
    technologies: ["HTM", "CSS", "Javascript"],
    liveVersion: "https://bob-burger-jb.netlify.app/",
    sourceURL: "https://github.com/Bateyjosue/metrics-webapp",
  },
];

const popblur = document.getElementById("popblur");
function openPopup() {
  popup.classList.add("open-pop-up");
  popblur.style.display = "block";
}

const modalPopup = (index) => {
  modalDetails.innerHTML = `
    <div class="modal-image">
      <span class="modal-close-btn"><i class="bi bi-x-lg"></i></span>
      <img src="${projectDetails[index].featuredImageUrl}" alt="" width="300" height="180">
    </div>
    <div class="modal-body card-content">
      <h2 class="title">${projectDetails[index].name}</h2>
      <ul>
        ${projectDetails[index].technologies.map((lang) => `<li>${lang} </li>`).join('')}
      </ul>
      <p class="more">
      ${projectDetails[index].description}
      </p>
    </div>
    <div class="modal-button">
      <a href="${projectDetails[index].liveVersion}" class="button">See Live <i class="bi bi-arrow-up-right-circle"></i></a>
      <a href="${projectDetails[index].sourceURL}" class="button">See Source <i class="bi bi-github"></i></a>
    </div>
  `;

  const modalCloseBtn = document.querySelectorAll('#works .modal .modal-image .modal-close-btn');
  modalCloseBtn.forEach((el) => {
    el.addEventListener('click', () => {
      modalDetails.style.visibility = 'hidden';
      blurryGray.style.visibility = 'hidden';
    });
  });
};

function closePopup() {
  popup.classList.remove("open-pop-up");
  popblur.style.display = "none";
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
    <button class="btn btn-skill" onclick="openPopup()" value="${
      el.id
    }">See Project</button>
  </div>
</div>
  `;
});
