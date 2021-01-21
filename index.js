$(document).ready(function() {

//Responsive navigation bar
$('#mobile-nav-bar').click(function() {
  $('.nav-background, .list-toggle').slideToggle(500);
  console.log(`clicked`);
});

$('li a').click(function(){
  $('.nav-background, .list-toggle').slideToggle(300);
});

var handAnimation = new TimelineMax({onUpdate:updateHand}); //Variable for all hand animations on scroll
var titleAnimation = new TimelineMax(); //Variable for title animation on scroll
var aboutAnimation = new TimelineMax(); //Variable for about section animation
var visualAnimation = new TimelineMax(); //Variable for about visuals animation
var parallaxScroll = new TimelineMax({onUpdate:updateParallax}); //parallax scrolling for project 1
var parallaxScrollTwo = new TimelineMax({onUpdate:updateParallaxTwo}); //parallax scrolling for project 2
const controller = new ScrollMagic.Controller();

var screenWidth = window.innerWidth;

if (screenWidth > 1900) {
  handAnimation.to(".tophand", 1, {x:1200});
  handAnimation.to("#topout", 0.7, {x:1280, opacity:0}, "=-1");
  handAnimation.to("#topout1", 0.4, {x:1320, opacity:0}, "=-1");
  handAnimation.to(".bottomhand", 1, {x:-1200}, "=-1");
  handAnimation.to("#bottomout", 0.7, {x:-1280, opacity:0}, "=-1");
  handAnimation.to("#bottomout1", 0.4, {x:-1320, opacity:0}, "=-1");
} else {
  handAnimation.to(".tophand", 1, {x:680});
  handAnimation.to("#topout", 0.7, {x:730, opacity:0}, "=-1");
  handAnimation.to("#topout1", 0.4, {x:750, opacity:0}, "=-1");
  handAnimation.to(".bottomhand", 1, {x:-680}, "=-1");
  handAnimation.to("#bottomout", 0.7, {x:-730, opacity:0}, "=-1");
  handAnimation.to("#bottomout1", 0.4, {x:-750, opacity:0}, "=-1");
}
//Title and Scroll animations
titleAnimation.to(".handpin h1, .mousescroll", 0.2, {opacity:0});
//About animations
aboutAnimation.to("#about h1, .about-text", 0.5, {y:-30, opacity:1});
visualAnimation.to(".face-outline", 0.7, {y:-30, opacity:1}, "=0.5");
//Parallax Work animation
parallaxScroll.to("#projectbg1", 1, {y:"-20%", ease:Power0.easeNone});
parallaxScrollTwo.to("#projectbg2", 1, {y:"-20%", ease:Power0.easeNone});

const scene = new ScrollMagic.Scene({
  triggerElement: ".scrollpoint1",
  triggerHook: "1",
  duration: "100%"
})

.setPin(".handpin")
.setTween(handAnimation)
.addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ".scrollpoint1",
  triggerHook: "1",
})
.setTween(titleAnimation)
.addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#about",
  triggerHook: ".4",
  reverse: false
})
.setTween(aboutAnimation)
.addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#about",
  triggerHook: ".4",
  reverse: false
})
.setTween(visualAnimation)
.addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#project1",
  triggerHook: ".7",
  duration: "100%"
})
.setTween(parallaxScroll)
.addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: "#project2",
  triggerHook: ".6",
  duration: "100%"
})
.setTween(parallaxScrollTwo)
.addTo(controller);

//animate on scroll and log scroll position
function updateHand() {
  handAnimation.progress();
  console.log(handAnimation.progress());
}

function updateParallax() {
  parallaxScroll.progress();
  console.log(parallaxScroll.progress());
}

function updateParallaxTwo() {
  parallaxScrollTwo.progress();
}

});
