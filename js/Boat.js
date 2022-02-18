class Boat {

  constructor(x, y, width, height, boatPos) {
    var options = {
      isStatic: true,
      restitution: 0.8,
      friction: 0.3,
      density: 1
    };
    this.width = width;
    this.height = height;
    this.boatPosition = boatPos;

    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
    this.image = loadImage("assets/boat.png");
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    fill("brown");
    imageMode(CENTER);
    image(this.image,0, this.boatPosition, this.width, this.height);
    pop();
  }
}
