
var r = 0.0;
let funkActivated = false

function process() {
    let wheel = document.getElementById("wheel");
    r++;
    let size = ((Math.sin(r/10.0)+1)*20);
    wheel.style.width = size+"%";
    wheel.style.marginLeft = (50-size/2)+"%";
    wheel.style.marginTop = (22.5-size/2)+"%";
    wheel.style.marginBottom = (-size/2)+"%";
    wheel.style.transform = "rotate("+r+"deg)";
}


function changeFont() {
    let body = document.getElementById("body");
    body.style.fontFamily = "comic-sans";
    if (funkActivated) {
        body.style.fontFamily = "skøn";
    }
    funkActivated = true;
}

setInterval(process, 10);