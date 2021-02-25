function setup() {
  createCanvas(800,400);
  a=createSprite(200, 200, 50, 80);
  a.shapeColor = "green";
  b=createSprite(400, 200, 80, 30);
  b.shapeColor = "green";
}

function draw() {
  background(0);  
   
  console.log(a.y-b.y);

  a.x = World.mouseX;
  a.y = World.mouseY;

  if(a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < 65 && a.y -b.y < a.height/2 + b.height/2 && b.y - a.y < 55){
   a.shapeColor = "red";
   b.shapeColor = "red";
  }
  else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }

  drawSprites();
}