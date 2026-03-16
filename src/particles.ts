export function drawParticle(ctx,x1,y1,x2,y2,t){

const px=x1+(x2-x1)*t
const py=y1+(y2-y1)*t

ctx.beginPath()
ctx.arc(px,py,3,0,Math.PI*2)
ctx.fill()

}
