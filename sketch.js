var gardenimage,garden;
var cat,catimage,catimage2,catimage3;
var mousejimage,mousejimage2,mousejmousejimage3;

function preload() {
    //load the images here
    gardenimage = loadImage("images/garden.png");
   catimage2 = loadAnimation("images/cat3.png","images/cat2.png");
   catimage = loadImage("images/cat1.png");
   mousejimage = loadImage("images/mouse1.png");
    mousejimage2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catimage3 = loadAnimation("images/cat4.png");
    mousejimage3 = loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    garden = createSprite(500,400,1200,850);
    garden.addImage(gardenimage);

    cat = createSprite(800,600);
    cat.addImage("sleeping",catimage);
     cat.scale = 0.2;
     
   mousej = createSprite(100,600);
   mousej.addImage("standing",mousejimage);
   mousej.scale = 0.2;
   

    //create tom and jerry sprites here

}

function draw() {
    //createCanvas(600,600);
    background("black");
    //Write condition here to evalute if tom and jerry collide
    
    text(mouseX+','+mouseY,10,45);
    
    /*if(cat.isTouching(mousej)){
        cat.addAnimation("END",catimage3);
        cat.changeAnimation("END");
        mousej.addAnimation("ENDING",mousejimage3);
        mousej.changeAnimation("ENDING");
        cat.changeVelocityX = 0;
    }*/
    keyPressed();
    if(cat.x - mousej.x < (cat.width - mousej.width)/2){
        cat.addAnimation("END",catimage3);
        cat.changeAnimation("END");
        mousej.addAnimation("ENDING",mousejimage3);
        mousej.changeAnimation("ENDING");
        cat.velocityX = 0;
    }
  //  collide();
    
    drawSprites();
}


function keyPressed(){
    console.log(keyCode)
    if(keyCode === 39){
        console.log('Right Arrow')
        cat.velocityX = -5;
        cat.addAnimation("running",catimage2);
        cat.changeAnimation("running");

        console.log('Left Arrow')
        mousej.addAnimation("moving",mousejimage2);
        mousej.changeAnimation("moving");
        //cat.x = cat.x - 10;

       // mousej.addAnimation("standing",mousejimage2);
        //mousej.changeAnimation("standing");
       // mousej.frameDelay = 25;
       return;
    }

    if(keyCode ===  37){
        
        
       
       return;
    }
    


}
function collide(){
   
}
