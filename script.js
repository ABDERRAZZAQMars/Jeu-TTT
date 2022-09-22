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
        document.getElementById('c1').style.background = 'red'
        document.getElementById('c2').style.background = 'red';
        document.getElementById('c3').style.background = 'red';
    }
}

// Function Game
document.getElementById('px').style.color = 'red';

function game(id) {
    let element = document.getElementById(id);
    if (tour == 'x' && element.innerHTML == '') {
        document.getElementById('po').style.color = 'red';
        document.getElementById('px').style.color = '';
        element.innerHTML = 'x';
        tour = 'o';
    } else if (tour == 'o' && element.innerHTML == '') {
        document.getElementById('px').style.color = 'red';
        document.getElementById('po').style.color = '';
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
    vide_style();
}

function vide_style() {
    document.getElementById('c1').style.background = ''
    document.getElementById('c2').style.background = '';
    document.getElementById('c3').style.background = '';
    document.getElementById('c4').style.background = ''
    document.getElementById('c5').style.background = '';
    document.getElementById('c6').style.background = '';
    document.getElementById('c7').style.background = ''
    document.getElementById('c8').style.background = '';
    document.getElementById('c9').style.background = '';

    document.getElementById('po').style.color = '';
    document.getElementById('px').style.color = '';
}