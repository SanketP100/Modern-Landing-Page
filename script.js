
Shery.imageEffect("#back",{style:5, config:{"a":{"value":0.46,"range":[0,30]},"b":{"value":0.91,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8330914368650217},"ignoreShapeAspect":{"value":false},"shapePosition":{"value":{"x":0,"y":-0.020408163265306145}},"shapeScale":{"value":{"x":0.44,"y":0.42}},"shapeEdgeSoftness":{"value":0.5,"range":[0,0.5]},"shapeRadius":{"value":0.06,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":1.75,"range":[1,15]},"durationOut":{"value":1.37,"range":[0.1,5]},"durationIn":{"value":0.92,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.16,"range":[0,2],"_gsap":{"id":18}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.30,"range":[0,2]},"noise_scale":{"value":20.14,"range":[0,100]}}, gooey:true})


var h1s=document.querySelectorAll("h1")
var index=0
document.querySelector("#main").addEventListener("click",function(){
    gsap.to(h1s[index],{
        top:"-=100%",
        ease: Expo.easeInOut,
        duration:1,
        onComplete: function(){
            gsap.set(this._targets[0],{top:"100%"})
        }
    })

    index===h1s.length-1 ? (index=0) : index++
    // index++

    gsap.to(h1s[index],{
        top:"-=100%",
        ease: Expo.easeInOut,
        duration:1 
    })
})


var elems = document.querySelectorAll(".elem")

elems.forEach(function (elem) {

    var h1s = elem.querySelectorAll("h1")
    var index = 0
    var main = document.querySelector("#main")
    var animat = false
    main.addEventListener("click", function () {
        if (!animat) {
            animat = true
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" })
                    animat = false
                }
            })

            index === h1s.length - 1 ? (index = 0) : index++

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1
            })
        }

    })
});
