const choices = ["Rock", "Paper", "Scizzor"];

let usrscr_span = document.getElementById("usr-scr");
let comscr_span = document.getElementById("comp-src");
let result = document.querySelector(".rsl");
let register = document.querySelector(".resg");
// let final = document.querySelector(".final");
// instead of this document.getElementsByClass("rsl");
// let final = 
let usrscore = 0;
let compscore = 0;
let userchoice = "";
let compchoice = "";

main();
function main()
{
    const rock_div = document.getElementById("rock");
    const scizzor_div = document.getElementById("scizzor");
    const paper_div = document.getElementById("paper");
    const final = document.querySelector(".final");
    
    rock_div.addEventListener("click", ()=> game("Rock") )
    paper_div.addEventListener("click", ()=> game(choices[1]))
    scizzor_div.addEventListener("click", ()=> game(choices[2]))
    final.addEventListener("click", ()=> finals())
    // event listener is not part of js part of browser
}

function game(usrchoice)
{
    const randomindex = Math.floor(Math.random()*choices.length); 
     // select randiom value btw [0,1)
    compchoice = choices[randomindex];
    // if(usrchoice="Rock" && compchoice)
    switch(usrchoice + compchoice)
    {
        case "RockScizzor":
        case "PaperRock":
        case "ScizzorPaper":
            win(usrchoice,compchoice)
        break;//win case
        case "ScizzorRock":
        case "RockPaper":
        case "PaperScizzor":
            lose(usrchoice,compchoice)
        break;//lose case
        case "RockRock":
        case "PaperPaper":
        case "ScizzorScizzor":
            tie(usrchoice,compchoice)
        break;// tie case

    }
}

function win(usrchoice,compchoice)
{
    usrscore++;
    usrscr_span.innerHTML = usrscore;
    result.innerHTML = `${usrchoice} beats ${compchoice}   YOU _ WIN!!`
}
function lose(usrchoice,compchoice)
{
    compscore++;
    comscr_span.innerHTML = compscore;
    result.innerHTML = `${compchoice} beats ${usrchoice}   YOU _ LOSE..`

}
function tie(usrchoice,compchoice)
{
    result.innerHTML = '| TIED |'
}

function myname()
{
    let me = prompt("Enter your name...");
    if(me == null)
    {
        register.innerHTML = 'Register yourself!'
    }else{
     register.innerHTML = `WELCOME!! ${me}`;
    }
    }

function finals()
{
    let person = prompt("Wite you name for leaderboard.");
    if(usrscore > compscore)
    {
        result.innerHTML = `Congrats ${person} on wining by ${usrscore-compscore} points`;
    }else if(usrscore == compscore)
    {
        result.innerHTML = `well played ${person} This is a DRAW!!`;
    }else{
        result.innerHTML = `Sorry ${person} you lost by ${compscore-usrscore} point(s)`;
    }
}

