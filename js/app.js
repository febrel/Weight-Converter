document.getElementById("output").style.visibility = "hidden";

const captura_HTML = document.querySelector("#lbsInput");

eventListener();

function eventListener() {
    captura_HTML.addEventListener("input", mostrarEquivalencias);
}



function mostrarEquivalencias(event) {
    let lbs = event.target.value;

    document.getElementById("output").style.visibility = "visible";

    document.getElementById("grOutput").innerHTML = lbs / 0.0022046;
    document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
    document.getElementById("ozOutput").innerHTML = lbs / 16;
}

