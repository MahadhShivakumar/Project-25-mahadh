class Paper {

    constructor() {
        this.body = Bodies.rectangle(100, 640, 20,20,{isStatic: false, density:1.2, friction: 0.5,restitution:0.0});
        World.add(world,this.body);
        this.image = loadImage("paper.png");
    }

    display() {
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}