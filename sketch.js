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

    //created plane and stand bodies
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
    stand=Bodies.rectangle(250,400,20,380,plane_options);
    World.add(world,stand);
   
    //created multiple of particle bodies 
    var particle_options = {
      restitution:0.3,
      frictionAir:0.7,
    }

    particle1 = Bodies.circle(210,10,10,particle_options);
    World.add(world,particle1);
    particle2 = Bodies.circle(215,10,10,particle_options);
    World.add(world,particle2);
    particle3 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle3);
    particle4 = Bodies.circle(225,10,10,particle_options);
    World.add(world,particle4);
    particle5 =Bodies.circle(230,10,10,particle_options);
    World.add(world,particle5);
    particle6 = Bodies.circle(235,10,10,particle_options);
    World.add(world,particle6);
    particle7 = Bodies.circle(240,10,10,particle_options);
    World.add(world,particle7);
    particle8 = Bodies.circle(245,10,10,particle_options);
    World.add(world,particle8);
    particle9 =Bodies.circle(250,10,10,particle_options);
    World.add(world,particle9);
    particle10 = Bodies.circle(250,10,10,particle_options);
    World.add(world,particle10);

    
    //created all the three rotator bodies
    var rotator_options={
      isStatic:true
    };

    rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator1);

    rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator2);

    rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator3);

    //styling the bodies here
    fill("brown");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("lightgreen");
    Engine.update(engine);

  //created shape for plane and stand
  rect(plane.position.x,plane.position.y,1200,20);
  rect(stand.position.x,stand.position.y,20,380);

  //created shape for all the paticles
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);
  ellipse(particle6.position.x,particle6.position.y,10);
  ellipse(particle7.position.x,particle7.position.y,10);
  ellipse(particle8.position.x,particle8.position.y,10);
  ellipse(particle9.position.x,particle9.position.y,10);
  ellipse(particle10.position.x,particle10.position.y,10);

  //created shape for all the rotators
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