class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'frictionAir':0.004
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.visibility=255
    }
    display(){
    var pos=this.body.position
    if (this.body.speed<4){
        push();
        translate(pos.x,pos.y)
        stroke("aqua")
        strokeWeight(4)
        fill(0,100,220)
        rectMode(CENTER)
        rect(0, 0, this.width, this.height)
        pop();
    }
    else{
        push();
        World.remove(world, this.body)
        this.visibility=this.visibility-2
        pop();
    }

    }
    score(){
        if(this.visibility<0&& this.visibility>-105){
          //score = score+1
          score++
        }
      }
}