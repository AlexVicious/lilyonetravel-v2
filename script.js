const canvas = document.getElementById("magicParticles")
const ctx = canvas.getContext("2d")

let W
let H

function resize(){

W=canvas.width=window.innerWidth
H=canvas.height=window.innerHeight

}

resize()

window.addEventListener("resize",resize)

const particles=[]

function rand(a,b){

return Math.random()*(b-a)+a

}

function createParticle(x,y){

particles.push({

x:x,
y:y,
vx:rand(-0.5,0.5),
vy:rand(-0.3,0.2),
life:rand(20,40),
size:rand(1,3)

})

}

window.addEventListener("mousemove",(e)=>{

createParticle(e.clientX,e.clientY)

})

function draw(){

ctx.clearRect(0,0,W,H)

for(let i=particles.length-1;i>=0;i--){

const p=particles[i]

p.x+=p.vx
p.y+=p.vy
p.life--

ctx.beginPath()
ctx.fillStyle="rgba(255,255,255,0.8)"
ctx.arc(p.x,p.y,p.size,0,Math.PI*2)
ctx.fill()

if(p.life<=0){

particles.splice(i,1)

}

}

requestAnimationFrame(draw)

}

draw()

/* navegación cinematográfica */

const transition=document.getElementById("pageTransition")

function go(url){

transition.classList.add("active")

setTimeout(()=>{

window.location.href=url

},400)

}

document.querySelectorAll(".nav-link").forEach(el=>{

el.addEventListener("click",()=>{

go(el.dataset.link)

})

})