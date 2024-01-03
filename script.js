let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#play-move");
const youscore = document.querySelector("#you");
const computerscore = document.querySelector("#Computer");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playthegame(choiceId);
        // console.log("click", choiceId);
    });
});

const compchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const a = Math.floor(Math.random() * 3);
    return options[a];
};

const playthegame = (choiceId) => {
    console.log("userchoice:", choiceId);
    const compthechoice = compchoice();
    console.log("compchoice:", compthechoice);
    checkwinner(choiceId, compthechoice);
};
const drawgame = () => {
    console.log("game draw");
    msg.innerText = "Game draw";
    msg.style.backgroundColor="#11009E"
};

const showwinner = (userWin, choiceId, compthechoice) => {
    if (userWin) {
        // console.log("user won");
        userScore++;
        youscore.innerText = userScore;
        msg.innerText = `${choiceId} beats ${compthechoice}`;
        msg.style.backgroundColor="#756AB6"
    } else {
        // console.log("user lose");
        compScore++;
        computerscore.innerText=compScore;
        msg.innerText = `${compthechoice} beats ${choiceId}`;
        msg.style.backgroundColor="#F6ECA9"
    }
};
const checkwinner = (choiceId, compthechoice) => {
    if (choiceId === compthechoice) {
        drawgame();
    } else {
        let userWin = true;
        if (choiceId === "rock") {
            userWin = compthechoice === "paper" ? false : true;
        } else if (choiceId === "paper") {
            userWin = compthechoice === "scissor" ? false : true;
        } else if (choiceId === "scissor") {
            userWin = compthechoice === "rock" ? false : true;
        }
        showwinner(userWin, choiceId, compthechoice);
    }
};
