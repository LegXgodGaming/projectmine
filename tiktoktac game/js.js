document.addEventListener("DOMContentLoaded", function () {



    let boxes = document.querySelectorAll(".btn1");
    let reset = document.querySelector("#reset");
    let newGameBtn = document.querySelector("#new-btn");
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg");

   
    let count=0;
    let turnX = "0";

    const win = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [3, 4, 5],
        [6, 7, 8],
        [2, 5, 8],
        [2, 4, 6]
    ];

    const resetGame = () => {

        // turnX = "0";
        count = 0;
        enbleBoxes ();
        msgContainer.classList.add("hide");

        

        

    }

    boxes.forEach((box) => {
        box.addEventListener("click", () => {

            if (turnX == "1") {
                
                box.innerHTML = "O";
                box.style.color = "red";
                turnX = "0";

            } else {
                box.innerHTML = "X";
                box.style.color = "green";
                turnX = "1";

            }
            box.disabled = "1";
            count++;


            let isWinner = checkwinner();
            if (count === 9 && !isWinner) {
                gameDraw();
            }
        });
    });
    const gameDraw = () => {
        msg.innerText = `Game was a Draw.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
      };
      

    const disableBoxes = () =>{

        for (let box of boxes) {
            box.disabled = true;
        }
    }
    const enbleBoxes = () =>{

        for (let box of boxes) {
            box.disabled = false;
            box.innerText ="";
        }
    }
    
    const showWinner = (winner) => {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    };

    

    
    



    const checkwinner = () => {
        for (let pattern of win) {
            let pos1 = boxes[pattern[0]].innerHTML;
            let pos2 = boxes[pattern[1]].innerHTML;
            let pos3 = boxes[pattern[2]].innerHTML;


            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    console.log("winner", pos1);
                    showWinner(pos1);
                }
            }

        }




    }

    newGameBtn.addEventListener("click" , resetGame);
    reset.addEventListener("click" , resetGame);

    



});





