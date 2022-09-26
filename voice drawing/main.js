var X=10; 
var Y=10;
var draw_rect_status = "";
var draw_cir_status = "";



var SpeechRecognition = window.webkitSpeechRecognition;

var my_agent =  new SpeechRecognition();


function start_recog(){
 document.getElementById("status").innerHTML = "you can now speak the system is now listening";
 my_agent.start();
}

my_agent.onresult = function(event){
    console.log(event);

    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "your speech is done and you asked for : " + content;

    if ( (content == "circle") ||  (content == "Circle") ||  (content == "circle.") ||  (content == "Circle.")){
 
        X = Math.floor(Math.random() * 1200);
        Y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "System is drawing the circle"
        draw_cir_status = "set";
    }
    
    if ( (content == "rectangle") ||  (content == "Rectangle") ||  (content == "rectangle.") ||  (content == "Rectangle.")){
 
        X = Math.floor(Math.random() * 1200);
        Y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "System is drawing the rectangle"
        draw_rect_status = "set";
        
    }
}


function setup(){

    canvas = createCanvas(1200,600);
    background("white");
    canvas.center();
}
function draw(){

    if (draw_cir_status = "set"){

       radius = Math.floor(Math.random() * 100);
        circle(X,Y, radius);
        document.getElementById("status").innerHTML = "circle is Drawn"
        draw_cir_status = "";
    }
    if (draw_rect_status = "set"){

       width= Math.floor(Math.random() * 100);
       height = Math.floor(Math.random() * 100);
         rect(X,Y,width,height);
         document.getElementById("status").innerHTML = "rectangle is Drawn"
         draw_rect_status = "";
     }


}