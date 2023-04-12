//1. when scroll, img-wrap rotate 
//2. track offsetTop hit the trigger, background color turns white

// gsap.to(".img-wrap", {
//     rotate: "360deg",
//     duration: 10,
//     repeat: -1
//   });



let tl = gsap.timeline()

tl.to('.img-wrap', {
  duration: 10,
  rotate: "360deg",
});

ScrollTrigger.create({
  trigger: "body",
  markers: true,
  start: "top top",
  animation: tl,
  scrub: 1,
  end: "+=100%",
  // onEnter: ()=>{tl.play()}
});


let tl2 = gsap.timeline()

tl2.to('body',{
  background: "#ffffff",
  color: "#000000"
})

ScrollTrigger.create({
  trigger: ".trigger",
  markers: true,
  start: "top top",
  animation: tl2,
  scrub: 1,
  end: "bottom bottom",
  // onEnter: ()=>{tl.play()}
});