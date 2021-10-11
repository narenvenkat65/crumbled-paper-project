const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  ball=Bodies.circle(20,200,10)
    World.add(world,ball)
    BOX1=new Ground ( 300,350,20,100);
    box2=new Ground ( 380,350,20,100,)
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  button=createImg("push.png")
  button.position(50,100)
  button.size(50,50)
  button.mouseClicked(horizontal);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,10,10)
  BOX1.show();
box2.show();
}
function horizontal(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.001,y:-0.02})


}

