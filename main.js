X=0;
Y=0;

Draw_Circle="";
Draw_Rectangle="";

SpeechRecognition=window.webkitSpeechRecognition;
Recognition=new SpeechRecognition();

function start(){
document.getElementById("status").innerHTML="System is listening";
Recognition.start()
}

Recognition.onresult=function(event){
    console.log(event);
    content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The Speech has been Recognized as " + content;
    if(content=="circle"){
        X=Math.random()*1000;
        Y=Math.random()*700;
        document.getElementById("status").innerHTML="Started Drawing Circle";
        Draw_Circle="set";
    }
    if(content=="rectangle"){
        X=Math.random()*1000;
        Y=Math.random()*700;
        document.getElementById("status").innerHTML="Started Drawing Rectangle";
        Draw_Rectangle="set";
    }
}

function setup(){
    canvas=createCanvas(1000,700);
}

function draw(){
    if(Draw_Circle=="set"){
       radius=Math.random()*100;
       circle(X,Y,radius);
       document.getElementById("status").innerHTML="Circle is Drawn";
       Draw_Circle="";
    }
    if(Draw_Rectangle=="set"){
        sides=Math.random()*100;
        rect(X,Y,70,50);
        document.getElementById("status").innerHTML="Rectangle is Drawn";
        Draw_Rectangle="";
     }
}