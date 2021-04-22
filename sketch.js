const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particle1, particle2,particle3,particle4,particle5;
var particle6, particle7,particle8,particle9,particle10;
var rotator1, rotator2, rotator3;

var angle1=60;
var angle2=60;
var angle3=60;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    var ops={
        isStatic:true
      };
    

    plane = new Plane(600,height,1200,20);
    stand = new Plane(250,400,20,380);


    particle1 = new Particle(250,50,10);
    particle2 = new Particle(250,50,10);
    particle3 = new Particle(250,50,10);
    particle4 = new Particle(250,50,10);
    particle5 = new Particle(250,50,10);
    particle6 = new Particle(250,50,10);
    particle7 = new Particle(250,50,10);
    particle8 = new Particle(250,50,10);
    particle9 = new Particle(250,50,10);
    particle10 = new Particle(250,50,10);

    rotator1 = Bodies.rectangle(250,200,150,20,ops);
    World.add(world,rotator1);

    rotator2 = Bodies.rectangle(250,200,150,20,ops);
    World.add(world,rotator2);

    rotator3 = Bodies.rectangle(250,200,150,20,ops);
    World.add(world,rotator3);

    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

    plane.display();
    stand.display();

    particle1.display();
    particle2.display();
    particle3.display();
    particle4.display();
    particle5.display();
    particle6.display();
    particle7.display();
    particle8.display();
    particle9.display();
    particle10.display();

      
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.3;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
}