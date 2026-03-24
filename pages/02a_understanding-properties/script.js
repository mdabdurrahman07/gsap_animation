import { gsap } from "gsap"; 
 gsap.to(".box", {
    opacity: 1,
    rotation: 360,
    borderRadius: "50%",
    scale: 1.25,
    // here duration is not CSS property
    duration:2,
    // delay: 0.5,
    ease: "power1.inOut",
    // these are gsap property
    repeat: 5,
    yoyo: true
 })