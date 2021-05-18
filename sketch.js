
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var bob1, bob2, bob3, bob4, bob5;
var string1, string2, string3, string4, string5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
   
	//Create the Bodies Here.
	ground = new Plane(400,100,500,40);

	bob1 = new bob(320,575,40);
	bob2 = new bob(360,575,40);
	bob3 = new bob(400,575,40);
	bob4 = new bob(440,575,40);
	bob5 = new bob(480,575,40);

    string1 = new Chain(ground.body, bob1.body);
    string2 = new Chain(ground.body, bob2.body);
    string3 = new Chain(ground.body, bob3.body);
    string4 = new Chain(ground.body, bob4.body);
    string5 = new Chain(ground.body, bob5.body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  drawSprites();
 
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bob1.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    string1.fly();
    
}


