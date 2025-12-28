// green sock animation platform
// cdn links gsap
gsap.from(".main *",{
    x:30,
    y:40,
    opacity:0,
    duration:3,
    delay:2,
    stagger:0.5,
})

gsap.from(".section1>h1",{
    opacity:0,
    duration:3,
    delay:2,
    stagger:0.5,
    scale:0.5,
})

gsap.from(".section2>h1",{
    rotate:360,
    color:"red",
    duration:3,
    delay:1,
    scrollTrigger:".section2>h1",
    repeat:-1,
    yoyo:true
})

gsap.from(".section3>img",{
    opacity:0,
    x:-400,
    duration:3,
    delay:1,
    scrollTrigger:".section3>img"
})

gsap.from(".section3>p",{
    opacity:0,
    x:400,
    duration:3,
    delay:1,
    scrollTrigger:".section3>p"
})