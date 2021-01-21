class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          isStatic:true
      }
      this.image =  loadImage("dustbingreen.png")
      this.wall1 = Bodies.rectangle(x, y, width, height, options);
      this.width = 120;
      this.height = 200;
      
      World.add(world, this.wall1);
    }
    display(){
      var pos =this.wall1.position;
      var angle = this.wall1.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      strokeWeight(4)
      stroke("white")
      fill("grey");
      image(this.image,0, 0, 120, 200);
      pop();
    }
  };
  