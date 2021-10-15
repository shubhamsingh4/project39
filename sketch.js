var boy,boy_running,boom,back,backImage;
var invisibleGround,o1,o2,o3,o4,obstacle,bang;
var gamestate,strt,start,point,pointboy,jump;
var obstacleGroup,over,ground,score1,up;
var potionGroup,bonus,spacei,space,homeb,home,shoot,gover;
var hero1i,hero1,invisibleSpace,hero2,level;
var invisibleSpace2,invisibleSpace3,invisibleSpace4,invisibleSpace5;
var monster11,monster22,monster33,monster44,monsterGroup,bulleti,bul2,bullet,bulletGroup;
var monster2Group,monster3Group,monster4Group,kills;

function preload(){
  
 level=loadSound("level.wav");
 bang=loadSound("bang.wav");
 shoot=loadSound("shoot.wav");
 gover=loadSound("over.wav");
 hero2=loadAnimation("hero2.png");
 bul2=loadImage("bullet2.png")
 bulleti=loadImage("bullet.png");
 monster11=loadImage("monster1.png");
 monster22=loadImage("monster2.png");
 monster33=loadImage("monster3.png");
 monster44=loadImage("monster4.png");
 bonus=loadSound("bonus.wav");
 over=loadSound("out.wav");
 spacei=loadAnimation("space2.gif");
 jump=loadSound("jump.wav");
 homeb=loadImage("home.png");
 hero1i=loadAnimation("hero1.png");
 boy_running=loadAnimation("1966250.gif");
 up=loadImage("powerup.png");
 boom=loadAnimation("boom1.png");
 backImage=loadImage("1758033.jpg"); 
 o1=loadImage("1.png"); 
 o2=loadImage("2.png"); 
 o3=loadImage("3.png"); 
 o4=loadImage("4.png"); 
 strt=loadImage("start.png");
 point=loadImage("boy.jpg");
}

function setup() {
 createCanvas(windowWidth,windowHeight);
  
  back=createSprite(width/2,0,0,0);
  back.addImage(backImage);
  back.scale=3;
  
  home=createSprite(50,50,20,20);
  home.addImage(homeb);
  home.scale=0.1;
  
  hero1=createSprite(width/2,height/2,20,20);
  hero1.addAnimation("right",hero1i);
  hero1.addAnimation("left",hero2);
  hero1.scale=0.2;
  hero1.setCollider("circle",0,0,250);

  boy=createSprite(100,height-200,150,900);
  boy.addAnimation("running",boy_running);
  boy.addAnimation("end",boom);
  boy.scale=0.3;
  boy.setCollider("rectangle",0,0,200,500);
  
  ground=createSprite(width/2,height-85,width,20);
  ground.shapeColor="green";
  
  space=createSprite(width/2,height/2,20,20);
  space.addAnimation("moving",spacei);
  space.scale=1.2;
  
  start=createSprite(width/2,500,20,20);
  start.addImage(strt);
  
  invisibleGround=createSprite(100,height-100,100,10);
  invisibleGround.visible=false;
  
  invisibleSpace=createSprite(width/2,height/2,1,height);
  invisibleSpace2=createSprite(0,height/2,1,height);
  invisibleSpace3=createSprite(width/2,0,width,1);
  invisibleSpace4=createSprite(width,height/2,1,height);
  invisibleSpace5=createSprite(width/2,height,width,1);
  
  gamestate="start";

  pointboy=createSprite(1130,335,20,20);
  pointboy.addImage(point);
  
  obstacleGroup=new Group();
  potionGroup=new Group();
  monsterGroup=new Group();
  monster2Group=new Group();
  monster3Group=new Group();
  monster4Group=new Group();
  bulletGroup=new Group();
  score1=0;
  kills=0;
}

function draw() {
  
  background("black");
  drawSprites();
  home.depth=space.depth+1;
  
  if(mousePressedOver(home)){
    gamestate = "start";
    obstacleGroup.destroyEach();
    potionGroup.destroyEach();
    bulletGroup.destroyEach();
    monsterGroup.destroyEach();
    monster2Group.destroyEach();
    monster3Group.destroyEach();
    monster4Group.destroyEach();
    score1=0;
  }
  
  if(gamestate==="start"){
   boy.visible=false;
   space.visible=false;
   hero1.visible=false;
   invisibleSpace.visible=false;
   invisibleSpace2.visible=false;
   invisibleSpace3.visible=false;
   invisibleSpace4.visible=false;
   invisibleSpace5.visible=false;
   back.visible=false;
    ground.visible=false;
    start.visible=false;
    textSize(30);
    
    fill("red");
    text("1. There are 2 kind of games in a single website!!!",100,100);
    fill("green");
    text("2. To play 'INFINITE RUNNER' game, press '1'.",100,200);
    fill("blue");
    text("3. To play 'SPACE SHOOTER' game, press '2'.",100,300);
    fill("yellow");
    text("4. Don't forget to CLICK on CANVAS or you will not be able to play.",100,400);

    if(keyDown("1")){
      gamestate="level1start";
      start.visible=true;
      level.play();
    }
    
    if(keyDown("2")){
      gamestate="level2start";
      level.play();
    }
  }
  
  
    textSize(20);
    fill("green");
    text("Score: "+score1,width-200,100);
  
  
  if(gamestate==="level1start"){
    background("lightpink");
    textSize(30);
    fill("red");
    text("1. Press SPACE key to jump.",100,100);
    fill("green");
    text("2. Beware of the obstacles.",100,200);
    fill("brown");
    text("3. Press on HOME(top left corner) to return.",100,300);
    fill("blue");
    text("4. Get the potion drink to get score +100.",100,400);
    fill("purple");
    text("5. Press S to start.",100,500);
    if(keyDown("S")){
      gamestate="level1";
      start.visible=false;
      level.play();
    }
  }
  
  
  if(gamestate==="level2start"){
    background("lightpink");
    textSize(30);
    fill("red");
    text("1. Control your Hero using arrow keys.",100,100);
    fill("brown");
    text("3. To shoot monsters press M(right) & N(left).",100,200);
    fill("blue");
    text("4. Monsters can come anytime, so beware of them.",100,300);
    fill("purple");
    text("5. Press S to start.",100,400);
    if(keyDown("s")){
      gamestate="level2";
      level.play();
    }
  }
  
  
  if(gamestate==="level2"){
    space.visible=true;
    pointboy.visible=false;
    hero1.visible=true;
    hero1.depth=space.depth+1;
    
    if(keyDown("up")){
      hero1.y=hero1.y-5;
    }
    if(keyDown("down")){
      hero1.y=hero1.y+5;
    }
    if(keyDown("right")){
      hero1.x=hero1.x+5;
      hero1.changeAnimation("right",hero1i);
    }
    if(keyDown("left")){
      hero1.x=hero1.x-5;
      hero1.changeAnimation("left",hero2);
    }
    
    spawnMonsters();
    spawnMonsters2();
    spawnMonsters3();
    spawnMonsters4();
    
    if(monsterGroup.isTouching(hero1)||monster2Group.isTouching(hero1)||monster3Group.isTouching(hero1)||monster4Group.isTouching(hero1)){
      gamestate="level2out";
      bang.play();
      }
    
    if(keyWentUp("m")){
      rightBullet();
      shoot.play();
      hero1.changeAnimation("right",hero1i);
    }
    if(keyWentUp("n")){
      leftBullet();
      shoot.play();
      hero1.changeAnimation("left",hero2);
    }
    if(bulletGroup.isTouching(monsterGroup)){
      bulletGroup.destroyEach();
      monsterGroup.destroyEach();
      score1=score1+1;
      gover.play();
    }
    if(bulletGroup.isTouching(monster2Group)){
      bulletGroup.destroyEach();
      monster2Group.destroyEach();
      score1=score1+1;
      gover.play();
    }
    if(bulletGroup.isTouching(monster3Group)){
      bulletGroup.destroyEach();
      monster3Group.destroyEach();
      score1=score1+1;
      gover.play();
    }
    if(bulletGroup.isTouching(monster4Group)){
      bulletGroup.destroyEach();
      monster4Group.destroyEach();
      score1=score1+1;
      gover.play();
    }
  }
  
  if(gamestate==="level2out"){
      monsterGroup.setVelocityXEach(0);
      bulletGroup.setVelocityXEach(0);
      monsterGroup.setLifetimeEach(-1);
      bulletGroup.setLifetimeEach(-1);
    monster2Group.setVelocityXEach(0);
    monster2Group.setLifetimeEach(-1);
    monster3Group.setVelocityXEach(0);
    monster3Group.setLifetimeEach(-1);
    monster4Group.setVelocityXEach(0);
    monster4Group.setLifetimeEach(-1);
    textSize(30);
    fill("crimson");
    text("Press R to restart",width/2-100,height/2);
    if(keyDown("r")){
      gamestate="level2";
      monsterGroup.destroyEach();
      monster2Group.destroyEach();
      monster3Group.destroyEach();
      monster4Group.destroyEach();
      bulletGroup.destroyEach();
      score1=0;
      level.play();
    }
  }
  
  if(gamestate==="level1"){
  back.velocityX=-1;
  boy.changeAnimation("running",boy_running);
  pointboy.visible=false;
  boy.visible=true;
  back.visible=true
  ground.visible=true;
    
  if(back.x<=width/2-100){
    back.x=width/2+50;
  }
    
    if(frameCount%2===0){
    score1=score1+1;
    }
    
     if(keyDown("space")&&boy.y>=height-180){
    boy.velocityY=-19.5;
    jump.play();
  }
    
    if(potionGroup.isTouching(boy)){
      score1=score1+100;
      potionGroup.destroyEach();
      bonus.play();
    }
    
      if(obstacleGroup.isTouching(boy)){
     gamestate="level1out";
     over.play();
     boy.changeAnimation("end",boom);
     back.velocityX=0;
  }
    
  spawnObstacles();
    powerUp();
  
  boy.velocityY=boy.velocityY+0.8;
  }

  

  if(gamestate==="level1out"){
    obstacleGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    potionGroup.setLifetimeEach(-1);
    potionGroup.setVelocityXEach(0);
    boy.velocityY=0;
    textSize(20);
    fill("crimson");
    text("Press R to restart",width/2-100,height/2);
    if(keyDown("r")){
      gamestate="level1";
      score1=0;
      obstacleGroup.destroyEach();
      potionGroup.destroyEach();
      boy.changeAnimation("running",boy_running);
      level.play();
    }
  }
  
  boy.collide(invisibleGround);
  hero1.collide(invisibleSpace5);
  hero1.collide(invisibleSpace3);
  hero1.collide(invisibleSpace4);
  hero1.collide(invisibleSpace2);
  
}

function spawnObstacles(){
  if(frameCount%90===0){
    obstacle=createSprite(width+10,height-130,20,20);
    obstacle.depth=boy.depth;
    var select=Math.round(random(1,4));
    obstacle.velocityX=-5-score1/80;
    obstacle.scale=0.5
    if(select===1){
      obstacle.addImage(o1);
      obstacle.scale=0.2;
      obstacle.y=height-120;
      }else if(select===2){
        obstacle.addImage(o2);
        obstacle.y=height-125;
      }else if(select===3){
        obstacle.addImage(o3);
      }else if(select===4){
        obstacle.addImage(o4);
        obstacle.y=height-127;
      }
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifetimeEach(300);
  }
}

function powerUp(){
  if(frameCount%290===0){
    var potion=createSprite(width+10,Math.round(random(height-250,height-400)),20,20);
    potion.addImage(up);
    potion.scale=0.1;
    potionGroup.add(potion);
    potionGroup.setLifetimeEach(300);
    potionGroup.setVelocityXEach(-5-score1/80);
  }
  
}

function spawnMonsters(){
  if(frameCount%30===0){
  var monster=createSprite(10,Math.round(random(100,height-100)),20,20);
  monster.addImage(monster11);
    monster.scale=0.2;
  var sel2=Math.round(random(1,2));
    if(sel2===1){
      monster.x=width+10;
      monster.velocityX=-5;
    } else if(sel2===2){
      monster.x=-10;
      monster.velocityX=5;
    }
    monsterGroup.add(monster);
    monsterGroup.setLifetimeEach(300);
  }
}

function spawnMonsters2(){
  if(frameCount%60===0){
  var monster2=createSprite(10,Math.round(random(100,height-100)),20,20);
  monster2.addImage(monster22);
    monster2.scale=0.2;
  var sel2=Math.round(random(1,2));
    if(sel2===1){
      monster2.x=width+10;
      monster2.velocityX=-5;
    } else if(sel2===2){
      monster2.x=-10;
      monster2.velocityX=5;
    }
    monster2Group.add(monster2);
    monster2Group.setLifetimeEach(300);
  }
}

function spawnMonsters3(){
  if(frameCount%90===0){
  var monster3=createSprite(10,Math.round(random(100,height-100)),20,20);
  monster3.addImage(monster33);
    monster3.scale=0.2;
  var sel2=Math.round(random(1,2));
    if(sel2===1){
      monster3.x=width+10;
      monster3.velocityX=-5;
    } else if(sel2===2){
      monster3.x=-10;
      monster3.velocityX=5;
    }
    monster3Group.add(monster3);
    monster3Group.setLifetimeEach(300);
  }
}

function spawnMonsters4(){
  if(frameCount%120===0){
  var monster4=createSprite(10,Math.round(random(100,height-100)),20,20);
  monster4.addImage(monster44);
    monster4.scale=0.2;
  var sel2=Math.round(random(1,2));
    if(sel2===1){
      monster4.x=width+10;
      monster4.velocityX=-5;
    } else if(sel2===2){
      monster4.x=-10;
      monster4.velocityX=5;
    }
    monster4Group.add(monster4);
    monster4Group.setLifetimeEach(300);
  }
}

function rightBullet(){
  bullet=createSprite(1,1,1,1);
  bullet.x=hero1.x+50;
  bullet.y=hero1.y;
  bullet.addImage(bul2);
  bullet.scale=0.03;
  bullet.velocityX=3;
  bulletGroup.add(bullet);
  bulletGroup.setLifetimeEach(300);
  return bullet;
}
function leftBullet(){
  bullet=createSprite(1,1,1,1);
  bullet.x=hero1.x-60;
  bullet.y=hero1.y-55;
  bullet.addImage(bulleti);
  bullet.scale=0.03;
  bullet.velocityX=-3;
  bulletGroup.add(bullet);
  bulletGroup.setLifetimeEach(300);
  return bullet;
}

