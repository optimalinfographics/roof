let slideIndex = 0;
const Carousel = document.getElementsByClassName("carousel")[0];
const Slides = document.getElementsByClassName("carousel-box");
const Dot = document.getElementsByClassName("carousel-dot")[0];
const DotSpan = document.getElementsByClassName("dot");


const ShowDot = () =>{

    for (let i = 0; i < Slides.length; i++) {
        let dot_span = document.createElement('SPAN');
        dot_span.classList.add('dot')
        Dot.append(dot_span);
    }  
}
ShowDot()


const showSlides = () =>{
    for (let i = 0; i < Slides.length; i++) {
        Slides[i].style.display = "none"; 
        DotSpan[i].classList.remove('active');
    }   
    if (slideIndex >= Slides.length){
        slideIndex = 0;
    }
    Slides[slideIndex].style.display = "block";
    DotSpan[slideIndex].classList.add('active');
    slideIndex++;
    
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
showSlides();