// Déclaration

let turn = 'x';

// Function Reset

const button = document.querySelector('button')

button.addEventListener('click', event => {
    Reset();
});

function Reset() {
    let cases = document.querySelectorAll(".case")
    cases.forEach(element => {
        element.innerHTML = ""
        turn = 'x';
    });
}

// Function Game

function game(id) {
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '') {
        element.innerHTML = 'x';
        turn = 'o';
    } else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = 'o';
        turn = 'x';
    }
}