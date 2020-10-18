/* 
-   Written By: Spiff Jekey-Green
-   Description: This is a simple implementation of Memory Game
*/

"use strict";


window.onload = function() {
    // initialize helper functions and variables
    var score = 0, sorted;
    var temp = [];

    var scoreShow = document.querySelector("#score");
    var gameBoard = document.querySelector(".game-board");

    var colors = [
        "red",
        "red",
        "green",
        "green",
        "lawngreen",
        "lawngreen",
        "lightsalmon",
        "lightsalmon",
        "navy",
        "navy",
        "yellow",
        "yellow",
        "black",
        "black",
        "darkmagenta",
        "darkmagenta"
    ];

    // The shuffle function
    function shuffle(arr) {
        var newArr = Array.from(arr);
        newArr = newArr.sort(function() {
            return Math.random() - 0.5;
        });
        return newArr;
    }

    function showCard() {
        if(this.style.background === "rgb(51, 51, 51)") {
            temp.push({ id: this.id, color: sorted[this.id] });
            this.style.background = sorted[this.id];
            if(temp.length === 2) {
                if(temp[0].color === temp[1].color) {
                    score += 5;
                    scoreShow.innerText = score;
                    if(score > 0) scoreShow.style.color = "green";
                    else if(score === 0) scoreShow.style.color = "black";
                    else scoreShow.style.color = "red";
                    temp = [];
                    // console.log(temp);
                } else {
                    setTimeout(() => {
                        score -= 5;
                        scoreShow.innerText = score;
                        if(score > 0) scoreShow.style.color = "green";
                        else if(score === 0) scoreShow.style.color = "black";
                        else scoreShow.style.color = "red";
                        temp.forEach(i => document.getElementById(i.id).style.background = "rgb(51, 51, 51");
                        temp = [];
                    }, 800);
                }
            }
        }
    }

    function startGame() {
        // Empty board
        gameBoard.innerHTML = "";

        // Change score back to zero
        score = 0;
        scoreShow.innerText = score;
        scoreShow.style.setProperty("color", "black");

        // put in new cards based on the sorted color combinations
        sorted = shuffle(colors);
        for(let i = 0; i < sorted.length; i++) {
            var elem = document.createElement("div");
            elem.setAttribute("class", "card");
            elem.setAttribute("id", i);
            elem.style.setProperty("background", sorted[i]);
            elem.addEventListener("click", showCard);
            gameBoard.append(elem);
        }

        setTimeout(function() {
            var cards = document.querySelectorAll(".card");
            cards.forEach(function(i) {
                i.style.setProperty("background", "#333");
            })
        }, 1500);
    }

    var startBtn = document.getElementById("newGame");
    startBtn.addEventListener("click", startGame);

    startGame();
}