// Button Reset

const button = document.querySelector('button')

button.addEventListener('click', event => {
    Reset();
});

function Reset() {
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("c4").innerHTML = "";
    document.getElementById("c5").innerHTML = "";
    document.getElementById("c6").innerHTML = "";
    document.getElementById("c7").innerHTML = "";
    document.getElementById("c8").innerHTML = "";
    document.getElementById("c9").innerHTML = "";
}