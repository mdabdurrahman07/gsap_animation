import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.85,
    ease: "power4.out",
    onComplete: () => {
      gsap.to(".toast", {
        delay: 1.5,
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "power2.in",
        onComplete: () => {
          gsap.to(".toast.one", {
            y: -120,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power4.out",
            onComplete: () => {
              gsap.to(".toast.one", {
                delay: 1.25,
                y: 0,
                opacity: 0,
                scale: 0.95,
                duration: 0.6,
                ease: "power2.in",
                onComplete: () => {
                  gsap.to(".toast.two", {
                    y: -120,
                    opacity: 1,
                    scale: 1,
                    duration: 0.85,
                    ease: "power4.out",
                    onComplete: () => {
                      gsap.to(".toast.two", {
                        delay: 1.25,
                        y: 0,
                        opacity: 0,
                        scale: 0.95,
                        duration: 0.6,
                        ease: "power2.in",
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    },
  });
};

showToastLoop();
