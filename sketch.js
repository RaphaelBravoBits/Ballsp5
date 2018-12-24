const width=400
const height=400
let balls = []
let ball1;
function setup() {
  createCanvas(width,height);
  ball1= new Ball(width/2,height/2,40,40);
}

function draw() {
  background(0);
  balls.map(item=>{
    item.show()
  })
}
function mouseClicked(){
  let ball= new Ball(mouseX,mouseY,40,40);
  balls.push(ball);
}
class Ball {
  constructor(posX, posY, pwidth,pheight){
    this.x = posX;
    this.y = posY;
    this.bwidth= pwidth;
    this.bheight= pheight;
    var temp;
    do {
      temp = random(-3, 3)
    } while (temp==0);
    this.deltaX = temp;
    do { 
      temp = random(-3, 3)
    } while (temp==0 || temp==this.deltaX);
    this.deltaY = temp;
  }
  move(){
    if(this.x+this.deltaX>width-(this.bwidth/2) || this.x+this.deltaX<(this.bwidth/2)) this.deltaX*=-1
    if(this.y+this.deltaY>height-(this.bheight/2) || this.y+this.deltaY<(this.bheight/2)) this.deltaY*=-1
    this.x+=this.deltaX*2;
    this.y+=this.deltaY*2;
  }
  grow(){
    var sizeX= map(mouseX,0,400,20,60)
    var sizeY= map(mouseY,0,400,20,60)
    this.bwidth = sizeX;
    this.bheight= sizeY;
  }
  show(){
    ellipse(this.x,this.y,this.bwidth,this.bheight);
    this.grow();
    this.move();
    
  }
}