class PlayerArrow {
  constructor(x, y, width, height) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    //escreva um código para definir uma matriz chamada trajectory (trajetória)
     this.trajectory = []
    
    World.add(world, this.body);
  }
  shoot(archerAngle) {
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(30);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }
  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

      if (this.body.velocity.x > 0 && this.body.position.x > 400) {
        var position = [this.body.position.x, this.body.position.y];
       this.trajectory.push(position)
      
      }
  for (let i = 0; i < this.trajectory.length; i++) {
    //da uma cor 
   fill ("white");
   //faz uma forma retangular 
   ellipse (this.trajectory[i][0],this.trajectory[i][1],5,5)
    
  }

      
     
  
  }
}