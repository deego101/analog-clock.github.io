var num=[],x=[],y=[],stri=[];
var done;
function setup(){
    createCanvas(400,400);
    angleMode(DEGREES);
    done=true;
    num=[3,4,5,6,7,8,9,10,11,12,1,2];
    for(var i=0;i<12;i++){
        stri[i]=num[i].toString();
    }
    displayHours();
} 
function displayHours(){
    var index=0;
     for(var a=0;a<360;a+=30){
        var r=100;
        var s=stri[index];
        stri[index]=s;
        x[index]=r*cos(a);
        y[index]=r*sin(a);
        fill(50,100,255);
        textSize(50);
        text(s,x,y);
        index++;     
      } 
}
var degree=1/60;
function draw(){
   background(255);
   push();
   translate(width/2+10,height/2-15);
   fill(51);
   ellipse(0,0,250);
   pop();
 
   push();
   translate(width/2,height/2);
        for(var i=0;i<num.length;i++){
            fill(50,100,255);
            textSize(35);
            text(stri[i],x[i],y[i]); 
        
    }
   pop();
    push();
    translate(width/2+10,height/2-15);
    rotate(degree/(360*360));
    fill(255);
    rect(0,0,90,5);
    pop();
    push();
    translate(width/2+10,height/2-15);
    rotate(degree/360);
    fill(255);
    rect(0,0,100,4);
    
    noFill();
    stroke(0);
    strokeWeight(4);
    ellipse(0,0,250);
   
    pop();
    
       
    //the seconds arrow//rectMode(CENTER);
    push();
    translate(width/2+10,height/2-15);
    rotate(degree);
    fill(255,200,100);
    rect(0,0,110,3);
    
    pop();
    push();
    translate(width/2+10,height/2-15);
    fill(255);
    ellipse(1,2,10);
    pop();
    
    
    
    degree+=6/60;
    
}