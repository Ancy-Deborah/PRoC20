class Particle{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			frictionAir:0.7,
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var particlePos=this.body.position;		
			push()
			translate(particlePos.x, particlePos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}