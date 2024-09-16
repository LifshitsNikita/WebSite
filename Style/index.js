let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  let slides = document.getElementsByClassName("myslide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Плавная замена изображений
  for (let slide of slides) {
    slide.style.transition = "opacity 1s ease-in-out"; 
    slide.style.opacity = "0"; 
  }

  slides[slideIndex - 1].style.opacity = "1"; // Делаем текущий слайд видимым
  slides[slideIndex - 1].style.display = "block"; // Устанавливаем отображение
}

var timer = 0;
makeTimer(); 
function makeTimer(){
  clearInterval(timer); 
  timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
  }, 4000);
}
  
 