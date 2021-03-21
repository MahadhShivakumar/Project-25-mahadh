class Ground {

    constructor() {
        this.body = Bodies.rectangle(width/2, 670, width, 20, {isStatic: true});
        World.add(world,this.body);
    }

    display() {
        push();
        fill("green")
        var groundDisplay = rect(this.body.position.x,this.body.position.y,width,20);
        pop();
    }
}