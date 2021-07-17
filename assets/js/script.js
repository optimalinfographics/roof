let slideIndex = 0;

const showSlides = () =>{
    const Slides = document.getElementsByClassName("carousel-box");
    for (let i = 0; i < Slides.length; i++) {
        let slides = Slides[i]
        slides.style.display = "none"; 
    }   
    if (slideIndex >= Slides.length){
        slideIndex = 0;
    }
    Slides[slideIndex].style.display = "block";
    slideIndex++;
    
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
showSlides();