import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");

let isFloating = false;

// this event for the button active and deactivate

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    button.classList.add("show");

    if (!isFloating) {
      gsap.to(button, {
        y: -10,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      isFloating = true;
    }
  } else {
    button.classList.remove("show");
  }
});

// this event for mouseEnter effect ON

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.1,
    duration: 0.2,
  });
});

// this event for mouseEnter effect OFF

button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.2,
  });
});

// main func of the button (go to top of the page)

button.addEventListener("click", () => {
  window.scrollTo(0,0)
});