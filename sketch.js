//Create variables here
var dog , happyDog
var database
var foodS , foodStock

function preload(){
	//load images here

  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("image/happydogImg1.png")
}




function setup() {
	createCanvas(800, 700);
database = firebase.database()
foodStock = database.ref("food");
foodStock.on("value")
foodStock.set(20);



  dog.createSpites = (250 , 350 , 10 , 60)
  dog.addImage(dogImg);
  dog.scale = 1;
  
}


function draw() {  
  backgroung("green")

  if(food!== undefined){
textSize(20)
fill(255)
text("Note press UP ARROW to feed DRAGO milk", 50,50)
text ("Food , Remaining:" +foodS , 150 , 150);

if (keyWentDown(UP_Arrow)){

  writeStock(foodS);
  dog.addImage("happyDogImg")
}

if (keyWentUp(UP_ARROW)){
  dog.addImage(dogImg)
}

if (foodS===0){
  foodS = 20;
}


  }

  drawSprites();
  //add styles here

}


function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x= x-1
  }


database.ref("/").update({
  food:x
});

}

function readStock(data){
  foodS = data.val();
}



