// Getting all the boxes
const boxes = document.querySelectorAll(".box");
const restart = document.querySelector(".restart");
const mode = document.querySelector(".mode");

// Handling Mode
mode.addEventListener("click", (e) => {
    if (mode.innerText === "Computer") {
        mode.innerText = "Multiplayer";
    } else {
        mode.innerText = "Computer";
    }
});

// Handling Restart
restart.addEventListener("click", (e) => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.classList.remove("used");
        box.classList.remove("winner");
    });
});
// Creating a 2d array to store winning permutations
const winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Declaring the turn
let turnX = true;

// Creating event listeners for each box
boxes.forEach((box) => {
    // Checking if the box is already used
    box.addEventListener("click", (e) => {
            if (!box.classList.contains("used")) {
                if (turnX) {
                    // Placing the values in the box
                    box.innerText = "X";
                } else {
                    box.innerText = "O";
                }

                // Declaring the box as used
                box.classList.add("used");
                // Toggling turns
                turnX = !turnX;

                // Checking for winning condition
                checkWinning();
            }
    });
});

const checkWinning = () => {
    for (let pattern of winning) {
        let val0 = boxes[pattern[0]].innerText;
        let val1 = boxes[pattern[1]].innerText;
        let val2 = boxes[pattern[2]].innerText;

        if (val0 !== "") {
            if (val0 === val1 && val1 === val2) {
                boxes[pattern[0]].classList.add("winner");
                boxes[pattern[1]].classList.add("winner");
                boxes[pattern[2]].classList.add("winner");
                boxes.forEach((box) => {
                    box.classList.add("used");
                });
            }
        }
    }
};
