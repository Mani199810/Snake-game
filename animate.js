var boxsize=15
var snakebody=15;
 
var score=document.getElementById('score');
var num=0;
var rows=20;
var colums=20;
var board;
var context;

var snakex=boxsize*3;
var snakey=boxsize*3;


var foodx;
var foody;

var velocityx=0;
var velocityy=0;

var gameover;
var snakebody=[]

window.onload=function(){
  board = document.getElementById("board");
    board.height=rows*rows;
    board.width=colums*colums;
    context=board.getContext('2d');

    food()
    document.addEventListener("keyup", function changeDirection(e){
        if(e.code == "ArrowUp"){
            velocityx=0;
            velocityy=-1;
            
          
    
        } else  if(e.code == "ArrowDown"){
            velocityx=0;
            velocityy=1;
    
        } else if(e.code == "ArrowLeft"){
            velocityx=-1;
            velocityy=0;
    
        }else  if(e.code == "ArrowRight"){
            velocityx=1;
            velocityy=0;
    
        }
    });
    
    setInterval(Update, 1000/5)
   
}

function Update (){
    if(gameover == true){
        return;
    }
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height)

    context.fillStyle="orange";
    context.fillRect(foodx,foody,boxsize,boxsize)

    
    if(snakex == foodx && snakey == foody){
        snakebody.push([foodx,foody])
        num+=5;
        score.innerHTML=`score-${num}`
        food()
        
    }

    for(let i =snakebody.length-1; i>0;i--){
        snakebody[i]=snakebody[i-1]
    }
    if(snakebody.length){
        snakebody[0]=[snakex,snakey]
    }
    context.fillStyle="blue";
    snakex += velocityx*boxsize;
    snakey += velocityy*boxsize;
    context.fillRect(snakex,snakey,boxsize,boxsize)
    

    for(let i=0;i<snakebody.length;i++){
        context.fillRect(snakebody[i][0],snakebody[i][1],boxsize,boxsize)

    }

   

    if(snakex <0 || snakey<0 || snakex > rows*rows || snakey>colums*colums){
        gameover=false;
        alert("Game over")
    }

   
}

function food(){
    foodx = Math.floor(Math.random()*rows)*boxsize;
    foody = Math.floor(Math.random()*colums)*boxsize;

}



