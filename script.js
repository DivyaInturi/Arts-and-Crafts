var sidemeu = document.getElementById("bars");
function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}

let slideIndex = 0;
let totalSlides = document.querySelectorAll(".slide").length;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, i) => {
    if (i >= index && i < index + 3) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  if (index === 0) {
    document.querySelector(".prev").style.display = "none";
  } else {
    document.querySelector(".prev").style.display = "block";
  }

  if (index >= totalSlides - 3) {
    document.querySelector(".next").style.display = "none";
  } else {
    document.querySelector(".next").style.display = "block";
  }
}

function nextSlide() {
  if (slideIndex < totalSlides - 3) {
    slideIndex++;
    showSlide(slideIndex);
  }
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
    showSlide(slideIndex);
  }
}

showSlide(slideIndex);
