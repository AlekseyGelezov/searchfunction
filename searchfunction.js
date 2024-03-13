function searchMovies() {

  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("moviesList");
  li = ul.getElementsByTagName('li');


  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
let MovieSlideIndex = 1;
showMovieSlides(MovieSlideIndex);


function plusSlides(n) {
showMovieSlides(MovieSlideIndex += n);
}

function currentSlide(n) {
showMovieSlides(MovieSlideIndex = n);
}

function showMovieSlides(n) {
let MovieSlideIndex = 0;
showMovieSlides();

function showMovieSlides() {
let i;
let slides = document.getElementsByClassName("movieSlides");
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
MovieSlideIndex++;
if (MovieSlideIndex > slides.length) {MovieSlideIndex = 1}
slides[MovieSlideIndex-1].style.display = "block";
setTimeout(showMovieSlides, 5000);
}
}