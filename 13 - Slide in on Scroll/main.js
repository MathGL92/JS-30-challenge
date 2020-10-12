function debounce(func, wait = 20, immediate = true) {
var timeout;
return function() {
  var context = this, args = arguments;
  var later = function() {
    timeout = null;
    if (!immediate) func.apply(context, args);
  };
  var callNow = immediate && !timeout;
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
  if (callNow) func.apply(context, args);
};
}

const sliderImages = document.querySelectorAll('.slide-in');



function checkSlide(event) {
  sliderImages.forEach(image => {
    // calculate the pixel level of when we want to slide the image (at half of the height)
    const slideInAt = (window.scrollY + window.innerHeight) - image.height / 2;
    // bottom of the image
    const imageBottom = image.offsetTop + image.height;
    // we want to make sure we scrolled half the image and the image is half shown
    const isHalfShown = slideInAt > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  })
}

window.addEventListener('scroll', debounce(checkSlide));
