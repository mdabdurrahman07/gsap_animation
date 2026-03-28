import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scale: 0.4,
    },
    {
      scale: 1.6,
      duration: 0.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: index * 0.1,
    },
  );
});
