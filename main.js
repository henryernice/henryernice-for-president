
var r = 0.0;
let funkActivated = 0;
let text = "VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! VOTE HENRY FOR PRESIDENT! ";

function process() {
    let wheel = document.getElementById("wheel");
    r++;
    let size = ((Math.sin(r/10.0)+1)*20);
    wheel.style.width = size+"%";
    wheel.style.marginLeft = (50-size/2)+"%";
    wheel.style.marginTop = (22.5-size/2)+"%";
    wheel.style.marginBottom = (-size/2)+"%";
    wheel.style.transform = "rotate("+r+"deg)";
    let texLen = text.length/6+1;
    let newtext = text.slice((r/20)%texLen, texLen+(r/20)%texLen);
    document.getElementById("title").innerText = newtext;
    console.log(newtext);
}


function changeFont() {
    let body = document.getElementById("body");
    body.style.fontFamily = "sans-serif";
    funkActivated++;
    if (funkActivated) {
        body.style.fontFamily = "comic-sans";
    }
    if (funkActivated == 2) {
        body.style.fontFamily = "skøn";
        funkActivated = -1;
    }
    let title = document.getElementById("title");

}

function funkItUpBaby(){
    document.getElementById("overlay").hidden = false;
    document.getElementById("body").style.backgroundColor = "#9fff8c"
}

setInterval(process, 10);