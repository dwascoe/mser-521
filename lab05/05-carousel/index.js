let currentPosition = 0;
// this is telling the code where to put the pictures on the carousel
const gap = 10;
// This says there should be a gap of 10 between the pictures
const slideWidth = 400;
// this is saying how wide each slide is


const items = document.querySelectorAll('.carousel-item');
// this is being used to select the class with the ID .carousel-item or in other words the pictures
const totalSlides = items.length;
// I think this means the total langth of the carousel should be the total langth of the pictures 

function moveForward() {
  if (currentPosition >= totalSlides - 2) {
    currentPosition = 0;
    // If it can't go any farther go back to the start
  } else {
    currentPosition++;
    // this means move forwards one picture
  }
  updateCarouselPosition();
  // make the pictures be in the position they are supposed to be as coded. / move it
}
// This tells the code how to move the pictures over when we hit the right arrow button

function moveBackward() {
  if (currentPosition <= 0) {
    currentPosition = totalSlides - 2;
    // If it can't go any farther go back to the end
  } else {
    currentPosition--;
    // this means move backwards one picture
  }
  updateCarouselPosition();
  // make the pictures be in the position they are supposed to be as coded. / move it
}
// This tells the code how to move the picutures over the oposite way when we hit the left arrow

function updateCarouselPosition() {
  const items = document.querySelectorAll('.carousel-item');
  // saying what to move
  const offset = (slideWidth + gap) * currentPosition;
  // How far to move with each arrow click

  for (const item of items) {
    item.style.transform = `translateX(-${offset}px)`;
  }
  // I think this is saying to move the picutres by what we set in the moveForwards / moveBackwards functions
}
// move the slides in the carousel