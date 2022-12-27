var rand = 286;
function targetLocked()
{
    let result = 'S';
    for (let i = 0; i < 5; i++) {
        result += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    document.getElementById("tar2").innerText = result;

}
var currentIndex = 0;
var maxsize = 2**24-1;

function changeColor() {
    another = "linear-gradient("
    deg = "-" + Math.floor(Math.random()*180)+ "deg" + ",";
    temp  = "#" + Math.floor(Math.random() * maxsize).toString(16);
    temps = "#" + Math.floor(Math.random() * maxsize).toString(16);
    another_one = another + deg + temp + "," + temps + ")";
    document.body.style.backgroundImage = another_one;

}

setInterval(changeColor, 2000); 
setInterval(targetLocked,2000);
