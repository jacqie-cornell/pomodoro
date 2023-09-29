var seconds = 0;
var interval ;
function pomodoro(mins) {
   console.log(mins)
   seconds = mins*60 || 0;     
   interval = setInterval(function() {
 
        seconds--;
        if(!seconds){
             clearInterval(interval); 
             alert("MEOW");
        }
   },1000)
}
