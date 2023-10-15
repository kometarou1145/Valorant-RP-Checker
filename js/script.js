document.getElementById("check").addEventListener("click", function() {
    const checkButton = document.getElementById("check");
    checkButton.style.backgroundColor = "#202124";
    setTimeout(function() {
        checkButton.style.backgroundColor = "#A6A6A7";
    }, 100);
});

function checkRP() {
    const outputWin = document.getElementById("outputWin");
    const outputLose = document.getElementById("outputLose");
    const outputDraw = document.getElementById("outputDraw");

    const inputKill = document.getElementById("kill");
    const killValue = inputKill.value;
    const inputDeath = document.getElementById("death");
    const deathValue = inputDeath.value;
    const inputAssist = document.getElementById("assist");
    const assistValue = inputAssist.value;

    const winValue = 0.4 * killValue - 0.51 * deathValue + 0.08 * assistValue + 16.87 * 1 - 0.88
    const loseValue = 0.4 * killValue - 0.51 * deathValue + 0.08 * assistValue + 16.87 * -1 - 0.88
    const drawValue = 0.4 * killValue - 0.51 * deathValue + 0.08 * assistValue + 16.87 * 0 - 0.88

    outputWin.textContent = "Win: " + parseInt(winValue) + "RP";
    outputLose.textContent = "Lose: " + parseInt(loseValue) + "RP";
    outputDraw.textContent = "Draw: " + parseInt(drawValue) + "RP";
}