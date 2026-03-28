import gsap from "gsap";

const reactionsContainer = document.querySelector(".reactions");

reactionsContainer.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const emoji = button.dataset.emoji;
  const rect = button.getBoundingClientRect();

  // Create bubble element
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.textContent = emoji;
  bubble.style.left = rect.left + rect.width / 2 + "px";
  bubble.style.top = rect.top + rect.height / 2 + "px";

  document.body.appendChild(bubble);

  // Animate the bubble using fromTo
  gsap.fromTo(
    bubble,
    {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      rotation: 0,
    },
    {
      y: -150,
      scale: 1.5,
      opacity: 0,
      rotation: 360,
      duration: 1.2,
      ease: "power2.out",
      onComplete: () => {
        bubble.remove();
      },
    }
  );
});

