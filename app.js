let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelectorAll("#resetbutton");
let msg = document.querySelector(".msg");
let msgtext = document.querySelector("#Winnertext");

let turnO = true;
const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                disableboxes();
                showWinner(position1);
            }
        }
    }
}

const showWinner = (winner) => {
    msgtext.innerText = `Awesome! Wow! Fabulous! You won against yourself ${winner} `;
    msg.classList.remove("hide");
}

resetbutton.forEach((btn) => {
    btn.addEventListener("click",()=>{
        for(box of boxes){
            box.disabled =false;
            box.innerText="";
            msg.classList.add("hide");
            turnO = true;
        }
    });
});

const disableboxes=()=>{
    for(box of boxes){
        box.disabled =true;
    }
}

