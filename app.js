// Allowed the hamburger to spread in circle when pressed

const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

hamburger.addEventListener('click', () =>{
    navlinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    });
});

// Parallax for the Portfolio Page

function parallax(element, distance, speed){
const item = document.querySelector(element);

item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function(){
    parallax('#Screws', window.scrollY, 0.2);
    parallax('#QueenBee', window.scrollY, 0.3);
    parallax('.InsideGreenBoxPortfolio', window.scrollY, 0.5);

});

//Change Color Background

document.getElementById("separation").onmouseover = function() {mouseOver()};
document.getElementById("separation").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("separation").style.backgroundImage = "linear-gradient(to top left, #8e969681, #8db4b493)";
}

function mouseOut() {
  document.getElementById("separation").style.backgroundImage = "linear-gradient(to bottom right, #78858500, #78858521)";
};