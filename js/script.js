let startingPage = document.querySelector('#startingPage');
let choose = document.querySelectorAll('.choose');

let mainPage = document.querySelector('#mainPage');
let showChange = document.querySelector('#showChange');
let boxes = document.querySelectorAll('.boxes');

let winner = document.querySelector('#winner');
let winnerName = document.querySelector('#winnerName');
let quit = document.querySelector('#quit');

let changTurn = null;


choose.forEach(chooseNow => {
    chooseNow.addEventListener('click', () => {
        if (chooseNow.id === 'playerX') {
            changTurn = false;
            showChange.style.left = '0px';
        } else {
            changTurn = true;
            showChange.style.left = '160px';
        }
        startingPage.style.display = 'none';
        mainPage.style.display = 'block';
    })
})

boxes.forEach(items => {
    items.addEventListener('click', () => {
        if (changTurn == false) {
            items.innerHTML = `<i class='bx bx-x'></i>`;
            items.id = "X";
            items.style.pointerEvents = "none"
            showChange.style.left = '160px';
            changTurn = true;
        } else {
            items.innerHTML = `<i class='bx bx-radio-circle'></i>`;
            items.id = "O";
            items.style.pointerEvents = "none"
            showChange.style.left = '0px';
            changTurn = false;
            
        }
        winningFunc();
        drawFunc();
    })
})

let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2]
]

let winningFunc = () => {
    for (let a = 0; a <= 7; a++) {
        let b = winningCombinations[a];

        if(boxes[b[0]].id == '' || boxes[b[1]].id == '' || boxes[b[2]].id == '') {

            continue;

        } else if(boxes[b[0]].id == 'X' && boxes[b[1]].id == 'X' && boxes[b[2]].id == 'X') {

            winnerName.innerText = `O'yinchi X G'alaba Qozonadi`;

            mainPage.style.display = 'none';
            winner.style.display = 'block';

        } else if(boxes[b[0]].id == 'O' && boxes[b[1]].id == 'O' && boxes[b[2]].id == 'O') {
            
            winnerName.innerText = `O'yinchi O G'alaba Qozonadi`;

            mainPage.style.display = 'none';
            winner.style.display = 'block';

        } else {

            continue;

        }
    }
}

let drawFunc = () => {
    if(boxes[0].id != "" && boxes[1].id != "" &&
    boxes[2].id != "" && boxes[3].id != "" &&
    boxes[4].id != "" && boxes[5].id != "" &&
    boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {

        winnerName.innerText = `O'yinda Durang`;

        mainPage.style.display = 'none';
        winner.style.display = 'block';
    }
}

quit.addEventListener('click', () => {
    window.location.reload()
})