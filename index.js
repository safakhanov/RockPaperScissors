



console.log(window);

const playRules = ["r","p","s"]
let player1Point =0;
let player2Point =0;

const showPoint1 =document.querySelector("#showPoint1");
const showPoint2 =document.querySelector("#showPoint2");

const showResult1 =document.querySelector("#showResult1");
const showResult2 =document.querySelector("#showResult2");

const showImage1 =document.querySelector("#showImage1");
const showImage2 =document.querySelector("#showImage2");


function randomElement(){
  const randomIndex =Math.floor (Math.random() * playRules.length);
  return playRules[randomIndex];
  
}

function resultGame(U,C){

  console.log(U);
  console.log(C);



  showImage1.src = `./assets/images/${U}.png`;
  showImage2.src = `./assets/images/${C}.png`;




  if(U == "s" && C == "p"){
    console.log("Winner");
    player1Point += 1;

    showPoint1.innerHTML =player1Point;

    showResult1.innerHTML ="WIN";
    showResult2.innerHTML ="LOSE";

    showResult1.style.color= "green"
    showResult2.style.color= "red"

    // showResult1.classList.toggle("text-success");
    // showResult2.classList.toggle("text-danger");


  }else if(U == "r" && C == "s"){
    console.log("Winner");
    player1Point += 1;

    showPoint1.innerHTML =player1Point;
    showResult1.innerHTML ="WIN";
    showResult2.innerHTML ="LOSE";
    
    showResult1.style.color= "green"
    showResult2.style.color= "red"

    // showResult1.classList.toggle("text-success");
    // showResult2.classList.toggle("text-danger");



  }else if(U == "p" && C == "r"){
    console.log("Winner");
    player1Point += 1;

    showPoint1.innerHTML =player1Point;
    showResult1.innerHTML ="WIN";
    showResult2.innerHTML ="LOSE";
    
    showResult1.style.color= "green"
    showResult2.style.color= "red"

    // showResult1.classList.toggle("text-success");
    // showResult2.classList.toggle("text-danger");


  }else if(U ==  C){
    console.log("Draw");

    showResult1.innerHTML ="Draw"
    showResult1.classList.toggle("text-warning");

    showResult2.innerHTML ="Draw"
    showResult2.classList.toggle("text-warning");


     showResult1.style.color= "yellow"
    showResult2.style.color= "yellow"

  }else{
    console.log("Lose");
    player2Point +=1;

    showPoint2.innerHTML =player2Point;

    showResult2.style.color= "green"
    showResult1.style.color= "red"

    showResult2.innerHTML ="WIN"
    showResult1.innerHTML ="LOSE"


    
  

    // showResult2.classList.toggle("text-success");
    // showResult1.classList.toggle("text-danger");



  }
}

window.addEventListener("keypress", function(e){
  const userChoose = e.key;

  if(playRules.indexOf(userChoose) != -1){
    const compChoose = randomElement();


    resultGame(userChoose, compChoose);

  }else{
    alert("Please choose a true rule ! \n ex:R,P,S");

  }
});

