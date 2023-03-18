
//main play buttons div
let pl_div = document.getElementById("nm-in");
//player names inputs
let play_x_input = document.getElementById("pl-x-name-in");
let play_o_input = document.getElementById("pl-o-name-in");
//main game box grid div
let game_boxes = document.getElementById("game-boxes-div");
//information div
let info_boxes = document.getElementById("score-info");
//player name table data
let pl_x_n = document.getElementById("pl-x-n");
let pl_o_n = document.getElementById("pl-o-n");
//player turn 
let pl_turn = document.getElementById("pl-turn");
// player points elements
let pl_x_p = document.getElementById("pl-x-p");
let pl_o_p = document.getElementById("pl-o-p");
// box buttons 
let box_btn = document.querySelectorAll(".pl-box");
// reset button 
let reset_btn = document.getElementById("reset-btn");
// result show div 
let result = document.getElementById("result-id");
//function for storing and entering name of players
function lets_play() {
    if (play_x_input.value == "" || play_o_input.value == "") {
        alert("Please enter your name");
    }
    else {
        pl_x_n.innerHTML = play_x_input.value;
        pl_o_n.innerHTML = play_o_input.value;
        pl_turn.innerHTML = play_x_input.value;
        game_boxes.style.display = "grid";
        info_boxes.style.display = "flex";
        pl_div.style.display = "none";
    }
}
let arrx = [];
let arro = [];
let tempx = "";
let tempo = "";
let xp = 0;
let op = 0;
for (let i = 0; i < game_boxes.children.length; i++) {
    game_boxes.children[i].onclick = function choose_box() {
        if (pl_turn.innerHTML == pl_x_n.innerHTML && game_boxes.children[i].innerHTML == "") {
            game_boxes.children[i].innerHTML = `<img src="pl_x.png" id = "x-img">`;
            pl_turn.innerHTML = pl_o_n.innerHTML;
            arrx[i] = game_boxes.children[i].innerHTML;
            tempx = game_boxes.children[i].innerHTML;
            if ((arrx[0] == tempx && arrx[4] == tempx && arrx[8] == tempx) || (arrx[2] == tempx && arrx[4] == tempx && arrx[6] == tempx) ||
                (arrx[0] == tempx && arrx[1] == tempx && arrx[2] == tempx) || (arrx[3] == tempx && arrx[4] == tempx && arrx[5] == tempx) ||
                (arrx[6] == tempx && arrx[7] == tempx && arrx[8] == tempx) || (arrx[0] == tempx && arrx[3] == tempx && arrx[6] == tempx)
                || (arrx[1] == tempx && arrx[4] == tempx && arrx[7] == tempx) || (arrx[2] == tempx && arrx[5] == tempx && arrx[8] == tempx)) {
                xp++;
                pl_x_p.innerHTML = xp;
                result.innerHTML = "PLAYER X WINS";
                result.style.display = "block";
                let aud =  new Audio("sa.mp3");
                aud.play();
                box_btn.forEach(btn1 => {
                    btn1.disabled = true;
                })
            }
            else {
                result.innerHTML = "No Conclusion";
                result.style.display = "block";
            }
        }
        else if (pl_turn.innerHTML == pl_o_n.innerHTML && game_boxes.children[i].innerHTML == "") {
            game_boxes.children[i].innerHTML = `<img src="PL_O.png" id = "o-img">`;
            pl_turn.innerHTML = pl_x_n.innerHTML;
            arro[i] = game_boxes.children[i].innerHTML;
            tempo = game_boxes.children[i].innerHTML;
            if ((arro[0] == tempo && arro[4] == tempo && arro[8] == tempo) || (arro[2] == tempo && arro[4] == tempo && arro[6] == tempo)
                || (arro[0] == tempo && arro[1] == tempo && arro[2] == tempo) || (arro[3] == tempo && arro[4] == tempo && arro[5] == tempo)
                || (arro[6] == tempo && arro[7] == tempo && arro[8] == tempo) || (arro[0] == tempo && arro[3] == tempo && arro[6] == tempo)
                || (arro[1] == tempo && arro[4] == tempo && arro[7] == tempo) || (arro[2] == tempo && arro[5] == tempo && arro[8] == tempo)) {
                op++;
                pl_o_p.innerHTML = op;
                result.innerHTML = "PLAYER O WINS";
                result.style.display = "block";
                let aud =  new Audio("sa.mp3");
                aud.play();
                box_btn.forEach(btn1 => {
                    btn1.disabled = true;
                })
            }
            else {
                result.innerHTML = "No Conclusion";
                result.style.display = "block";
            }
        }
        let audio = new Audio("cla.wav");
        audio.play();
    };
}
function reset() {
    box_btn.forEach(btn => {
        btn.innerHTML = "";
    });
    for (let i = 0; i < 9; i++) {
        arrx[i] = "";
        arro[i] = "";
        tempx = "";
        tempo = "";
    }
    result.innerHTML = "";
    box_btn.forEach(btn1 => {
        btn1.disabled = false;
    })
}




