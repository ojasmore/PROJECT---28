
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree,treeimg;
var boy,boyimg;
var stone;
var rubberband;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
     boyimg = loadImage("images/boy.png");
     treeimg = loadImage("images/tree.png");
}

function setup() {
	createCanvas(1200, 500);

	engine = Engine.create();
  world = engine.world;
  
	ground = new Ground(600,490,1200,20);
  boy = createSprite(200,410,5,5);
  boy.addImage(boyimg)
  boy.scale = 0.13;

  tree = createSprite(900,235,50,50);
  tree.addImage(treeimg)
  tree.scale = 0.4;

  mango1 = new Mango(900,50,50);
  mango2 = new Mango(950,80,40);
  mango3 = new Mango(850,160,50);
  mango4 = new Mango(800,130,40);
  mango5 = new Mango(780,200,45);
  mango6 = new Mango(980,185,50);
  mango7 = new Mango(905,140,35);
  mango8 = new Mango(1035,90,45);
  mango9 = new Mango(1075,200,50);
  mango10 = new Mango(750,140,40);

  stone = new Stone(140,325,50,50);
  rubberband = new Rubberband(stone.body,{x:140,y:320})

	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine);	
  rectMode(CENTER);
  background(255);

  ground.display();

  drawSprites();

  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
   rubberband.fly();
}

function keyPressed(){
   if(keyCode === 32){
     Matter.Body.setPosition(stone.body,{x:140,y:320});
     rubberband.attach(stone.body);
   }
}

function detectCollision(lstone,lmango){

    mangoBodyPosition = lmango.body.position;
    stoneBodyPosition = lstone.body.position;

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
    if(distance<=lmango.radius+lstone.radius)
    {
      Matter.Body.setStatic(lmango.body,false);
    }

}