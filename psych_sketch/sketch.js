var x = 200;
var y = 200;
var e = 0
var speed = 25;
var d = 0
function setup() {
  createCanvas(400,400);
  c = color(255,255,255);
  background(255,0,255);
}

function draw() {
fill(c);
shearX(d);
shearY(d);
rect(200-e,100+e,150,250);
triangle(400,200,100,200,300,400);
fill(random(255),random(255),random(255));
ellipse(300,200,99+e,100+e);
rect(x,y,100,100)
 x = x + speed;
if(x>=width-100){
  speed = speed * -1;
  c = color(random(255),random(255),random(255))
}
  if(x<=0){
  speed = speed * -1;
}
if (mouseIsPressed){
  e=e+1;
}
 else { c = color(random(255),random(255),random(255));
 e=0
}
if(keyIsPressed){
  e=0;
  d=0;
  x=200;
  y=200;
}
if(e>=100){
  if(mouseIsPressed){d=d+1}
  
}
}