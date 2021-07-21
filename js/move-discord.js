var id = null;
var state = -1;
var pos = 110;

function move() {
    var speed = (state === -1 ? 5 : 1);
    var elem = document.getElementById("discord-card");   
    
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if ((pos <= 70 && state === -1) || (pos > 110 && state === 1)) {
            state *= -1;
            clearInterval(id);
        } else {
            pos+=speed*state;
            (((state === -1) ? (pos <= 100 ? (speed < 0.2 ? 0 : speed -= 0.2) : 0) : (pos >= 100 ? (speed >= 5 ? 0 : speed += 0.2) : 0)));
            elem.style.top = pos + '%';
        }
    }
}