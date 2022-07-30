    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    const vmax = Math.max(vw,vh);
    var prevEvent, currentEvent;
    document.documentElement.onmousemove=function(event){
    	currentEvent=event;
    }

    setInterval(function(){
    	if(prevEvent && currentEvent){
    		var movementX=Math.abs(currentEvent.screenX-prevEvent.screenX);
    		var movementY=Math.abs(currentEvent.screenY-prevEvent.screenY);
    		var movement=Math.sqrt(movementX**2+movementY**2);

    //speed=movement/100ms= movement/0.1s= 10*movement/s
    var speed=movement/(200*0.001);//current speed    
    
    var glitch_elements = document.getElementsByClassName('glitch');
    var circle = document.getElementById('circle');
    //alert(circle)  
    for(i = 0; i < glitch_elements.length; i++) {
    	glitch_elements[i].style.opacity=(speed/(vmax));
    }
}

prevEvent=currentEvent;
prevSpeed=speed;

},100);
