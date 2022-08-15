function hoverColour(e) {
    //bg=window.getComputedStyle( document.body ,null).getPropertyValue('background-color');
    //document.body.classList.remove('red-bg');
    //document.body.classList.add('red-bg');
    //document.body.style.backgroundColor = bg;
    //document.body.style.animation='none';
    //setTimeout(changeColour, 10);
    thisColor=e.style.color;
    document.body.style.animationPlayState="paused";
    document.querySelector('#hover-bg').style.backgroundColor=thisColor;
    document.querySelector('#hover-bg').style.opacity=1;

    document.querySelector('.my-photo-bg').style.animationPlayState="paused";
    document.querySelector('#my-photo-bg-hover').style.backgroundColor=thisColor;
    document.querySelector('#my-photo-bg-hover').style.color=thisColor;
    document.querySelector('#my-photo-bg-hover').style.opacity=1;
  }

function resetColour() {
    //document.body.classList.remove('red-bg');
    //document.body.style.animation = 'pageColor 10s 2s infinite linear';
    //document.body.style.backgroundColor = bg;
    //document.body.style.animation='none';
    //setTimeout(changeColour, 10);
    document.querySelector('#hover-bg').style.opacity=0;
    document.body.style.animationPlayState="running";

    document.querySelector('#my-photo-bg-hover').style.opacity=0;
    document.querySelector('.my-photo-bg').style.animationPlayState="running";
  }
