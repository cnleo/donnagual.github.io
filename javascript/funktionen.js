function fadeIn() {
    let element = document.getElementById("fadeBody");
        let opacity = 0;
        let fadeIn = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
            element.style.opacity = opacity;
            opacity += 0.015;
        }, 10);
}


function showNav() {
    document.getElementById("navBar").style.height = "50px";
}
function hideNav() {
    document.getElementById("navBar").style.height = "0";
}

function showdropGalerie() {    
    document.getElementById("dropGalerie").style.display = "flex";
}
function hidedropGalerie() {
    document.getElementById("dropGalerie").style.display = "none";
}

function showdropProjekt() {    
    document.getElementById("dropProjekt").style.display = "flex";
}
function hidedropProjekt() {
    document.getElementById("dropProjekt").style.display = "none";
}


let x = true;
function weg() {
        if (x == false) {
            sozialDiv.style.display = "none";
            x = true;
        }
        else {
            sozialDiv.style.display = "block";
             x = false;
        }
}
