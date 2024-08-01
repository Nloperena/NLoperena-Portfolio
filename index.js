let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;

    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme"
  }
  else {
    document.body.classList.remove("dark-theme")
  }
}

function contact(event) {
  event.preventDefault(); //prevents page from refreshing after submitting form
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "portfoliowebsite",
      "template_mh5jzar",
      event.target,
      "18B24lJRY2DbsSYlL"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on nicholasloperena@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

//Tempalte ID: template_ycceepr
// Public key: 18B24lJRY2DbsSYlL
// ServiceID: portfoliowebsite


// Function to load HTML files into the main index.html
function loadHTML(url, elementId) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    });
}

// Load HTML parts into the main document
loadHTML('nav.html', 'nav-include');
loadHTML('header.html', 'header-include');
loadHTML('landing-page.html', 'landing-page-include');
loadHTML('cards.html', 'cards-include'); // Corrected ID and file name
loadHTML('projects.html', 'projects-include');
loadHTML('footer.html', 'footer-include');
loadHTML('modal.html', 'modal-include');
// Function to apply custom cursors
function applyCustomCursor() {
  // Set the default custom cursor
  document.body.style.cursor = "url('./mouse/cursor1.png'), default";

  // Apply the custom cursor to all elements
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
      element.style.cursor = "url('./mouse/cursor1.png'), default";
  });

  // Change the cursor on click
  document.body.addEventListener('mousedown', () => {
      document.body.classList.add('clicked');
  });

  document.body.addEventListener('mouseup', () => {
      document.body.classList.remove('clicked');
  });
}

// Apply the cursor when the page loads
document.addEventListener('DOMContentLoaded', applyCustomCursor);
