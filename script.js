let $team1score= document.getElementById("team1-score");
let $team2score= document.getElementById("team2-score");
let $team1wickets= document.getElementById("team1-wickets");
let $team2wickets= document.getElementById("team2-wickets");
let $team1balls=document.querySelectorAll("#team1-superover>.ball");
let $team2balls=document.querySelectorAll("#team2-superover>.ball");

let possibleOutcomeArr=[0,1,2,3,4,6,"w"];
let turn=1;
let team1score=0;
let team2score=0;
let team1wickets=0;
let team2wickets=0;
let ballFacedByTeam1=0;
let ballFacedByTeam2=0;

let strikeAudio= new Audio("http://bit.ly/so-ball-hit");
let gameOverAudio= new Audio("http://bit.ly/so-crowd-cheer");


function play(){ 
    strikeAudio.pause();
    strikeAudio.currentTime=0; 
    strikeAudio.play();

    let randomNo=Math.floor(Math.random()*possibleOutcomeArr.length);
    let outcome=possibleOutcomeArr[randomNo];
    if(turn==1){
        ballFacedByTeam1++;
        if(outcome=="w"){
            team1wickets++;
            $team1wickets.textContent=team1wickets;
            $team1balls[ballFacedByTeam1 - 1].textContent=outcome;
        }
        else{
            team1score += outcome;
            $team1score.textContent=team1score;
            $team1balls[ballFacedByTeam1 - 1].textContent=outcome;
        }
        if(ballFacedByTeam1==6 || team1wickets==2){
            turn=2;
        }
    }
    else if(turn==2){
        ballFacedByTeam2++;
        if(outcome=="w"){
            team2wickets++;
            $team2wickets.textContent=team2wickets;
            $team2balls[ballFacedByTeam2 - 1].textContent=outcome;
        }
        else{
            team2score += outcome;
            $team2score.textContent=team2score;
            $team2balls[ballFacedByTeam2 - 1].textContent=outcome;
        }
        if(ballFacedByTeam2==6 || team2wickets==2|| team2score>team1score){
            gameOver()
        }
    }





}

function gameOver(){
    gameOverAudio.play();
    if(team1score>team2score){
        alert("India wins..!!! ")
    }
    else if(team2score>team1score){
        alert("paks wins")
    }
    else{
        alert("It is a tie!!")
    }

}
function reset(){
    window.location.reload();

}













