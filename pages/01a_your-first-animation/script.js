// simple fade in animation
gsap.to(".card", {
    opacity: 1,
    scale: 1,
    duration: 3,
    // onComplete func works when the animation is completed
    onComplete: () => {
        gsap.to(".card", {
            y: 20,
            repeat: -1,
            yoyo: true,
            duration: 0.5
        })
    }
})