// Déclaration

let tour = 'x';
let cadr = [];



// // Function Win

function win() {

    for (let i = 1; i < 10; i++) {
        cadr[i] = document.getElementById('c' + i).innerHTML;
    }
    console.log(cadr)

    if (cadr[1] == cadr[2] && cadr[2] == cadr[3] && cadr[1] != '') {
        document.getElementById('c1').style.background = '#000'
        document.getElementById('c2').style.background = '#000';
        document.getElementById('c3').style.background = '#000';
    }
}

// Function Game

function game(id) {
    let element = document.getElementById(id);
    if (tour == 'x' && element.innerHTML == '') {
        document.getElementById('px').style.fontSize = "bold";
        element.innerHTML = 'x';
        tour = 'o';
    } else if (tour == 'o' && element.innerHTML == '') {
        document.getElementById('po').style.fontSize = "bold";
        element.innerHTML = 'o';
        tour = 'x';
    }
    win();
}

// Function Reset

const button = document.querySelector('button')

button.addEventListener('click', event => {
    Reset();
});

function Reset() {
    let cases = document.querySelectorAll(".case")
    cases.forEach(element => {
        element.innerHTML = ""
        tour = 'x';
    });
}