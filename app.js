
const p1 = {
    score: 0,
    button: document.querySelector('#p1Plus'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Plus'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winScore');

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {

    updateScore(p1, p2);

})

p2.button.addEventListener('click', function () {

    updateScore(p2, p1);
})

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

function reset() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;

    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');

    isGameOver = false;

    p1.button.disabled = false;
    p2.button.disabled = false;
}