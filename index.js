$(document).ready(function () {
  const landingImg = document.querySelectorAll(".landingHover");
  const landingh1 = document.querySelector(".landing-h1");
  const landingA = document.querySelector(".secondary-text");
  const projectText = document.querySelector(".project-text");
  const projectTarget = document.querySelector(".project-target");

  //mouse enter and leave function for landing img projects
  landingImg.forEach((item) => {
    let projectImgg;
    item.addEventListener("mouseenter", function (e) {
      projectTargetNum = e.target.id;
      projectImgg = document.querySelector(`.landingP${projectTargetNum}`);
      projectImgg.style.opacity = ".3";
      landingh1.style.filter = `blur(8px)`;
      landingh1.style.opacity = "0";
      landingA.style.opacity = "0";
      projectTarget.textContent = `PROJECT ${projectTargetNum}`;
      projectText.style.opacity = "1";
      projectText.style.filter = `none`;
    });
    item.addEventListener("mouseleave", function () {
      projectImgg.style.opacity = "0";
      landingh1.style.filter = `none`;
      landingh1.style.opacity = "1";
      landingA.style.opacity = "1";
      projectText.style.filter = `blur(8px)`;
      projectText.style.opacity = "0";
    });
  });

  //Responsive navigation bar
  $("#mobile-nav-bar").click(function () {
    $(".nav-background, .list-toggle").slideToggle(500);
    console.log(`clicked`);
  });

  $("li a").click(function () {
    $(".nav-background, .list-toggle").slideToggle(300);
  });

  //one option is to have the title as a paralax and have a slow opacity change with devices going up
  //second option is to have one smooth animation with everything disapearing

  var landingBoxAn = new TimelineMax();
  var titleAn = new TimelineMax();
  var mouseAnimation = new TimelineMax(); // Variable for mouse animation on scroll
  var logoAnimation = new TimelineMax(); // Variable for logo text on scroll
  var aboutAnimation = new TimelineMax(); //Variable for about section animation
  var visualAnimation = new TimelineMax(); //Variable for about visuals animation
  var workAnimation = new TimelineMax();
  var landingImgAn = new TimelineMax();
  var projectBgAnimation = new TimelineMax();
  var projectAnimation = new TimelineMax();
  var projectNumber = new TimelineMax();
  var parallaxScroll = new TimelineMax({ onUpdate: updateParallax }); //parallax scrolling for project 1
  var parallaxScrollTwo = new TimelineMax({ onUpdate: updateParallaxTwo }); //parallax scrolling for project 2
  const controller = new ScrollMagic.Controller();

  //Title and Scroll animations
  landingBoxAn.to(".landing-box", 0.2, {
    y: `-80%`,
    opacity: "0",
  });
  mouseAnimation.to(".mousescroll", 0.2, { display: "none" });
  titleAn.to(".landing-text-container", 0.1, { opacity: "0.3" });
  logoAnimation.to(".nav-logo", 0.4, { opacity: 0 });
  landingImgAn.to(".landing-img", 0.2, { y: `-100%`, opacity: "0" });
  //About animations
  aboutAnimation.to("#about h1, .about-text", 0.2, { y: -30, opacity: 1 });
  visualAnimation.to(".about-visuals", 1, { opacity: 1 }, "=0.5");
  //Work Animations
  workAnimation.to("#work h1", 1.2, { opacity: 1 });
  projectBgAnimation.to(".image-container", 1, { opacity: 1 }, "=0.5");
  projectNumber.to(".content-align h4", 1, { opacity: 0.2 }, "=0.7");
  projectAnimation.to(
    ".content-align h2, .content-align h3, .button-main",
    1,
    { opacity: 1 },
    "=0.7"
  );
  //Parallax Work animation
  parallaxScroll.to("#projectbg1", 1, { y: "-20%", ease: Power0.easeNone });
  parallaxScrollTwo.to("#projectbg2", 1, { y: "-20%", ease: Power0.easeNone });

  // scrollMagic scene function
  const newScene = function (
    scrollPoint,
    triggerNumber,
    runContinue,
    animation
  ) {
    const scene10 = new ScrollMagic.Scene({
      triggerElement: scrollPoint,
      triggerHook: triggerNumber,
      reverse: runContinue,
    })
      .setTween(animation)
      .addTo(controller);
  };

  newScene(".scrollpoint1", "1", true, landingBoxAn);
  newScene(".scrollpoint1", "1", true, mouseAnimation);
  newScene(".scrollpoint2", "1", true, logoAnimation);
  newScene("#about", 0.7, false, aboutAnimation);
  newScene("#about", 0.6, false, visualAnimation);
  newScene(".project1", 0.6, false, workAnimation);
  newScene(".project1", 0.5, false, projectBgAnimation);
  newScene(".project1", 0.5, false, projectNumber);
  newScene(".project1", 0.5, false, projectAnimation);
  newScene(".scrollpoint1", 0.7, true, landingImgAn);
  newScene(".scrollpoint1", 0.9, true, titleAn);
  /*
  const scene3 = new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.6,
    reverse: false,
  })
    .addIndicators()
    .setTween(aboutAnimation)
    .addTo(controller);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#about",
    triggerHook: 0.6,
    reverse: false,
  })
    .setTween(visualAnimation)
    .addTo(controller);
*/
  const scene5 = new ScrollMagic.Scene({
    triggerElement: "#project1",
    triggerHook: ".7",
    duration: "100%",
  })
    .setTween(parallaxScroll)
    .addTo(controller);

  const scene6 = new ScrollMagic.Scene({
    triggerElement: "#project2",
    triggerHook: ".6",
    duration: "100%",
  })
    .setTween(parallaxScrollTwo)
    .addTo(controller);

  //animate on scroll and log scroll position
  function updateParallax() {
    parallaxScroll.progress();
  }

  function updateParallaxTwo() {
    parallaxScrollTwo.progress();
  }
});
