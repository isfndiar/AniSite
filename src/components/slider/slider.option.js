import Flickity from "flickity";

const options = {
  accessbility: true,
  prevNexButttons: true,
  pageDots: true,
  setGallerySize: false,
  arrowShape: {
    x0: 1,
    x1: 58,
    y1: 62,
    x2: 55,
    y2: 48,
    x3: 18,
  },
};

// function to set bg  position  for slide
function setBgPosition(slide, index) {
  const x = -(slide.target + flkty.x) / 3;
  slides[index].style.backgroundPosition = `${x}px`;
}

// slide initialization
const carousel = document.querySelector("[carousel]");
const slides = Array.from(document.getElementsByClassName("carousel-cell"));
const flkty = new Flickity(carousel, options);

// event listener using bg position
flkty.on("scroll", () => {
  flkty.slides.forEach(setBgPosition);
});
