//1. when scroll, img-wrap rotate 
//2. track offsetTop hit the trigger, background color turns white

// gsap.to(".img-wrap", {
//     scrollTrigger: ".wrap", // start the animation when ".box" enters the viewport (once)
//     x: 500,
//     markers: true
//   });

//the rotating supposed to start in the beginnig
let tl = gsap.timeline()
tl.to('.img-wrap',{rotate: "360deg"})
  ScrollTrigger.create({
    trigger: "body",
    markers: true,
    start: "top top",
    animation: tl,
    scrub: 1,
    end: "+=100%",
    onToggle: self => console.log("toggled, isActive:", self.isActive),
    onUpdate: self => {
      console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
    }
  });
  