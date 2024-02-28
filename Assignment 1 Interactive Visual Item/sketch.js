let horizon;
let ambience;
horizon = 200;
function preload(){
  ambience = loadSound("oceanandfoghorn.mp3");
}
function setup() {
  createCanvas(800, 400);
  noCursor();
  ambience.loop();
}
function draw()
  {
  //dawn_sky
  noStroke();
  fill(227, 111, 130);
  rect(0,0,800,400);
  //night_sky
  fill(4, 29, 122,mouseY-220);
  rect(0,0,800,400);
  //stars
  fill(250,250,250,mouseY-150);
  circle(150,30,3);
  circle(400,150,3);
  circle(220,100,3);
  circle(130,170,3);
  circle(550,130,3);
  circle(770,90,3);
  circle(650,50,3);
  circle(450,40,3);
  circle(250,60,3);
  circle(150,30,3);
  //sun
  fill('white');
  circle(300,mouseY,65+mouseY/8);
  fill(245, 152, 66, mouseY);
  circle(300,mouseY,65+mouseY/8);
  //clouds
  fill(199, 76, 96,100+mouseY/2);
  ellipse(mouseX-300,180,120,10);
  ellipse(mouseX-50,180,200,10);
  ellipse(mouseX-200,100,200,25);
  ellipse(mouseX-300,120,200,20);
  ellipse(mouseX-400,150,200,20);
  ellipse(mouseX-800,160,200,15);
  ellipse(mouseX+60,140,200,10);
  ellipse(mouseX+400,170,200,10);
  ellipse(mouseX+550,130,160,20);
  //cloudshadow
  fill(4, 29, 122,mouseY/3);
  ellipse(mouseX-300,180,120,10);
  ellipse(mouseX-50,180,200,10);
  ellipse(mouseX-200,100,200,25);
  ellipse(mouseX-300,120,200,20);
  ellipse(mouseX-400,150,200,20);
  ellipse(mouseX-800,160,200,15);
  ellipse(mouseX+60,140,200,10);
  ellipse(mouseX+400,170,200,10);
  ellipse(mouseX+550,130,160,20);
  //sea
  fill(156, 20, 72);
  rect(0,horizon,800,200);
  //boat
  fill(122, 21, 63);
  rect(510,240,160,10);
  triangle(510,240,510,245,505,240);
  square(640,220,20);
  square(660,235,5);
  square(645,215,8);
  //bg_land_left
  fill(122, 21, 63);
  triangle(0,160,0,horizon,180,horizon);
  //bg_land_right
  fill(128, 24, 64);
  triangle(550,200,650,180,750,horizon);
  triangle(700,200,800,165,800,horizon);
  //bg_land_forward
  triangle(650,300,800,250,800,320);
  triangle(375,400,800,300,800,400);
  triangle(-200,400,250,350,350,400);
  triangle(220,320,300,300,350,320);
  triangle(320,300,400,300,340,290);
  triangle(295,285,320,285,300,280);
   
  //landscapeshadow
  fill(0,0,0,mouseY-150);
  rect(0,200,800);
  triangle(550,horizon,650,180,750,horizon);
  triangle(0,160,0,horizon,180,horizon);
  quad(800,165,800,horizon,750,horizon,718,194);
  //sunreflection
  fill(255, 205, 181, mouseY/1.2);
  if (mouseY < height/2){
  ellipse(300,250,50,5);}
  if (mouseY < height/1.95){
  ellipse(300,240,70,5);}
  if (mouseY < height/1.9){
  ellipse(300,230,80,5);}
  if (mouseY < height/1.76){
  ellipse(300,220,90,5);}
  if (mouseY < height/1.7){
  ellipse(300,210,90,5);}

  //lightswave1
  if (mouseY > height / 3) {
    fill(250, 150, 0);
    circle(700,195,4);
    circle(600,192,5);
    circle(630,190,3);
    circle(610,195,3);
    circle(590,195,3);
    //
    circle(700,350,7);
    circle(600,370,7);
    circle(500,380,9);
    circle(730,380,8);
    //
    fill('white');
    circle(510,240,3);
    circle(530,240,3);
    circle(550,240,3);
    circle(570,240,3);
    circle(590,240,3);
    circle(610,240,3);
    circle(630,240,3);
    circle(650,240,3);
    fill('green');
    circle(645,225,3);
  } 
  //lightswave2  
    if (mouseY > height / 1.5) {
    fill(250, 225, 82);
    circle(790,195,4);
    circle(730,192,5);
    circle(740,190,3);
    //
    circle(640,380,7);
    circle(720,350,9);
    circle(770,310,10);
    circle(760,330,8);
  }
  //lightswave3  
    if (mouseY > height / 1.1) {
    fill(250, 225, 180);
    circle(750,195,4);
    circle(720,192,5);
    circle(620,190,3);
    //
    circle(750,365,13);
    circle(700,375,14);
    circle(570,390,15);
  }
}