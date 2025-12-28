gsap.from(".header *",{
    x:30,
    y:40,
    opacity:0,
    duration:2,
    delay:2,
    stagger:0.5,
    scrollTrigger:""
})

gsap.from(".section1 *",{
    opacity:0,
    stagger:0.5,
    delay:2,
    scale:0.5,
    scrollTrigger:".header"
})

gsap.from(".section3 *",{
    opacity:0,
    x:90,
    y:90,
    duration:2,
    delay:1,
    stagger:0.5,
    scrollTrigger:".section3"
})

gsap.from(".subsection4 *",{
    opacity:0,
    x:-300,
    y:50,
    duration:3,
    delay:2,
    stagger:0.5,
    scrollTrigger:".subsection4"
})

gsap.from(".section4 *",{
    opacity:0,
    x:300,
    y:50,
    duration:3,
    delay:2,
    stagger:0.5,
    scrollTrigger:".section4"
})

gsap.from(".box *",{
    opacity:0,
    duration:2,
    delay:2,
    stagger:0.5,
    scrollTrigger:".box"
})


