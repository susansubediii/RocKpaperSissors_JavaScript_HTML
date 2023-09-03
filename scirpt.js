var playerName=null;
var gamePoint = null;
var computerScore = 0;
var humanScore = 0;
var presentComputerImg= null;
var presentHumanImg= null;

// for popupbox
const inputValue = document.getElementsByTagName("input");
for(var i=0;i<=1;i++)
{
    inputValue[i].addEventListener("input",function()  {
    if(inputValue[0].value.length > 0 && inputValue[1].value.length > 0)
    {//checking if the 
     document.getElementById("btn").style.backgroundColor="#157347";
    }
    else{
     document.getElementById("btn").style.backgroundColor="#5C636A";
    }
});
}

    function save(){
    if(inputValue[0].value.length > 0 && inputValue[1].value.length > 0)
    {
        playerName=document.getElementById("name").value;
        gamePoint=document.getElementById("game-point").value;
        document.querySelector(".menu").classList.add("hidden");
        // document.querySelector(".overlay").classList.add("hidden");
        document.getElementById("player").innerHTML=playerName;
        event.preventDefault();
    }
    else{
        event.preventDefault();
    }
}
function displayBox()
{
  document.querySelector(".menu").classList.remove("hidden");
//   document.querySelector(".overlay").classList.remove("hidden");
}


function change(){
    document.querySelector(".menu").classList.remove("hidden");
     document.getElementById("btn").style.backgroundColor="#FFCA2C";
    document.getElementById("name").value = playerName;
    document.getElementById("game-point").value = gamePoint;
    playerName = document.getElementById('player');
   
}
function rock(){
    if(presentHumanImg !== null){
        document.querySelector(".human-"+presentHumanImg).classList.add("hidden");
    }
    presentHumanImg = "rock";
    if(presentComputerImg !== null){
        document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");
    }
    //image ko thau ma null xa vaney image rock haal
    document.querySelector(".human-"+presentHumanImg).classList.remove("hidden");

    var computerValue = generateComputerValue();
    presentComputerImg = computerValue;
    document.querySelector(".computer-"+computerValue).classList.remove("hidden");
    // humanInput= "rock";
    // document.getElementById("computer-input").innerHTML = computerValue;
    // document.getElementById("human-input").innerHTML = humanInput;

    //comparison 
    if(computerValue == "rock")
    {
        alert("Draw");
    } 
    else if (computerValue == "scissor")
    {
        alert("Human Won");
        humanScore++;
        document.getElementById("human-point").innerHTML = humanScore;
    }
    else if(computerValue == "paper")
    {
        alert("computer Won");
        computerScore++;
        document.getElementById("computer-point").innerHTML = computerScore;

    }
    gameOverCheck(humanScore,computerScore);

}
function scissor(){
    if(presentHumanImg !== null)
    {
      document.querySelector(".human-"+presentHumanImg).classList.add("hidden");
    }
    presentHumanImg = "scissor";
    if(presentComputerImg !== null)
    {
      document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");
    }
    document.querySelector(".human-"+presentHumanImg).classList.remove("hidden");
    var computerValue = generateComputerValue();
    presentComputerImg=computerValue;
    document.querySelector(".computer-"+computerValue).classList.remove("hidden");
   

    var computerValue = generateComputerValue();
    if(computerValue == "scissor")
    {
        alert("Draw");
        // document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");

    } 
    else if (computerValue == "paper")
    {
        alert("Human Won");
        humanScore++;
        document.getElementById("human-point").innerHTML = humanScore;
    //   document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");


    }
    else if(computerValue == "stone")
    {
        alert("computer Won");
        computerScore++;
        document.getElementById("computer-point").innerHTML = computerScore;
    //   document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");


    }
}



function paper(){
    
    if(presentHumanImg !== null)
    {
      document.querySelector(".human-"+presentHumanImg).classList.add("hidden");
    }
    presentHumanImg = "paper";
    if(presentComputerImg !== null)
    {
      document.querySelector(".computer-"+presentComputerImg).classList.add("hidden");
    }
    document.querySelector(".human-"+presentHumanImg).classList.remove("hidden");
    var computerValue = generateComputerValue();
    presentComputerImg=computerValue;
    document.querySelector(".computer-"+computerValue).classList.remove("hidden");
   

    if(computerValue =="paper" )
    {
    } 
    else if (computerValue == "stone")
    {
        alert("Human Won");
        humanScore++;
        document.getElementById("human-point").innerHTML = humanScore;

    }
    else if(computerValue == "scissor")
    {
        alert("computer Won");
        computerScore++;
        document.getElementById("computer-point").innerHTML = computerScore;

    }
}
function generateComputerValue(){
    const elements = ["paper","scissor","rock"];
    var value = Math.random() * 3;
    var index = Math.floor(value);
    return elements[index];
}

function restart()
{
    computerScore =0;
    humanScore= 0;
    document.getElementById("computer-point").innerHTML = computerScore;
    document.getElementById('human-point').innerHTML = humanScore;
}
function gameOverCheck(x,y)
{
   if(x == gamePoint)
   {
     document.getElementById("result").innerHTML="You won";
   }
   else if(y == gamePoint)
   {
     document.getElementById("result").innerHTML="You loose";
   }
  
}