let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let n = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
let count = 0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked!")
        if(turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let win = checkWinner();
        if(count === 9 && !win){
            draw();
        }
    });
});
const checkWinner = () => {
    for(let pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]]);
        console.log(
            box[pattern[0]].innerText,
            box[pattern[1]].innerText,
            box[pattern[2]].innerText
        );
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos1 === pos3){
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
};
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disable();
};
const disable = () => {
    for(let box1 of box){
        box1.disabled = true;
    }
}
const resetG = () => {
    turnO = true;
    count = 0;
    enable();
    msgContainer.classList.add("hide");
}
const enable = () => {
    for(let box2 of box){
        box2.disabled = false;
        box2.innerText = "";
    }
}
n.addEventListener("click",resetG);
reset.addEventListener("click",resetG);
const draw = () => {
    msg.innerText = `ITS A DRAW`;
    msgContainer.classList.remove("hide");
    disable();
}