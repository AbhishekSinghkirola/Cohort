// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

const carouselTrackEl = document.getElementById("carouselTrack");
const captionEl = document.querySelector("#caption");
const nextButtonEl = document.querySelector("#nextButton");
const prevButtonEl = document.querySelector("#prevButton");
const autoplayBtn = document.querySelector("#autoPlayButton");

let currentIndex = 0;
const totalImages = images.length;

const updateCaption = () => {
  captionEl.innerHTML = `<p>${images[currentIndex].caption}</p>`;
};

const showImage = (index) => {
  const slides = document.querySelectorAll(".carousel-slide");
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
};

const nextImage = () => {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
  updateCaption();
};

const prevImage = () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
  updateCaption();
};

const handleAutoplay = () => {
  let autoplayInterval;
  if (autoplayBtn.innerText === "Start Auto Play") {
    autoplayBtn.innerText = "Stop Auto Play";
    autoplayInterval = setInterval(() => {
      nextImage();
    }, 2000);
  } else {
    autoplayBtn.innerText = "Start Auto Play";
    clearInterval(autoplayInterval);
  }
};

nextButtonEl.addEventListener("click", nextImage);
prevButtonEl.addEventListener("click", prevImage);
autoplayBtn.addEventListener("click", handleAutoplay);

showImage(currentIndex);
updateCaption();

// Display all images in the carousel
const displayCarouselImages = () => {
  images.forEach((image) => {
    carouselTrackEl.innerHTML += `
      <div class="carousel-slide">
        <img src="${image.url}" alt="${image.caption}" width="100%" height="100%">
      </div>
    `;
  });
};
displayCarouselImages();
