// alert('hey')

document.querySelector(".main").addEventListener("mousemove",((dets)=>{
  // console.log(dets)

  gsap.to(".cursor",{
    // x:`${dets.x}+ '50px' `  , 
    x:dets.x + 12,
    y: dets.y + 12,
    // y:`${dets.y}+ "50px" ` ,
  }),
  gsap.to(".cursor-follower",{
    x:dets.x,     
    y:dets.y,
    duration:1
  })
}))






gsap.to('.videodiv',{
    scrollTrigger:{
      trigger:'.home',
      scrub:2,
      pin:true,
    },
    '--clip':'0%',
    ease:Power2,
    // duration:2
})

gsap.set('.marquee',{
    scale:5
})

gsap.to('.marquee',{
    scrollTrigger:{
      trigger:'.home',
      scrub:3,
    },
    scale:1,
    ease:Power2,
})
 
var gg =document.querySelectorAll('.silde')
gsap.to('.slide',{
    scrollTrigger:{
      trigger:'.real',
    //   markers:true,
      start:'top top',
      pin:true,
      end:'top -150% ',
      scrub:1,
    },
    xPercent:-190,
    ease:Power4 ,
})

// gsap.to(".slide3 .image2",{
//   scrollTrigger:{
//     trigger:'.real', llllllllllllllllll  
//   },
//   rotate:360,
//   repeat:-1,
//   duration:1,
//   // delay:-1,
//   ease:Power4 ,

// })


document.querySelectorAll('.listElem').forEach((el)=>{
   el.addEventListener('mousemove',function(dets){
       gsap.to(this.querySelector('.img'),{
         opacity:1,
         ease:Power2,
         duration:0.5
       })
       gsap.to(this.querySelector('.layer'),{
        height:'100%',
        ease:Power1,
        duration:.5
      })
   })

   el.addEventListener('mouseleave',function(dets){
    gsap.to(this.querySelector('.img'),{
      opacity:0,
      ease:Power2, 
      duration:0.5,
    })
    gsap.to(this.querySelector('.layer'),{
        height:'0%',
        ease:Power2,
        duration:.5,
      })
})
})



document.querySelectorAll('.section')
.forEach((e)=>{
    ScrollTrigger.create({
        trigger:e,
        start:'top 50%',
        end:'bottom 50%',
        // markers:true,
        onEnter: function (){
            document.body.setAttribute('theme',e.dataset.color)
        },
        onEnterBack: function (){
            document.body.setAttribute('theme',e.dataset.color)
        }
    })
})

gsap.from('.left p,.left h1, .left button',{
  scrollTrigger:{
    trigger:'.capsules',
    start:'top 50%',
    end:'top 0%',
    stagger:.5,
    // scrub:1,
    // markers:true
  },
  x:-50,
  opacity:0,
  duration:1
})

gsap.from('.head',{
  scrollTrigger:{
    trigger:'.footer',
  },
  x:-50,
  opacity:0,
  duration:1
})