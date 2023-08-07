let sasso = document.querySelector(".sasso");
let carta = document.querySelector(".carta");
let forbice = document.querySelector(".forbice");
let userChoose = document.querySelector(".userChoose");
let computerChoose = document.querySelector(".computerChoose");
let endGame = document.querySelector(".endGame");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");
let tie = document.querySelector(".tie");

let score = JSON.parse(localStorage.getItem("score")) || {
  vittorie: 0,
  sconfitte: 0,
  pareggi: 0,
};

function restart() {
  localStorage.removeItem("score");

  win.innerHTML = 0;
  lose.innerHTML = 0;
  tie.innerHTML = 0;

  score = {
    vittorie: 0,
    sconfitte: 0,
    pareggi: 0,
  };

  userChoose.innerHTML = "";
  computerChoose.innerHTML = "";
  endGame.innerHTML = "";
}

win.innerHTML = score.vittorie;
lose.innerHTML = score.sconfitte;
tie.innerHTML = score.pareggi;

function computerChoice() {
  let randonNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";
  if (randonNumber === 1) {
    computerChoice = "sasso";
  } else if (randonNumber === 2) {
    computerChoice = "carta";
  } else {
    computerChoice = "forbice";
  }
  return computerChoice;
}

function game(userChoice) {
  const computer = computerChoice();
  let result = "";

  if (userChoice === "sasso") {
    userChoose.innerHTML = `<img src="img/sasso.png"></img><span>${userChoice}</span>`;
    if (computer === "carta") {
      computerChoose.innerHTML = `<img src="img/carta.png"></img><span>${computer}</span>`;
      result = "Hai perso!";
    } else if (computer === "forbice") {
      computerChoose.innerHTML = `<img src="img/forbice.png"></img><span>${computer}</span>`;
      result = "Hai vinto!";
    } else {
      computerChoose.innerHTML = `<img src="img/sasso.png"></img><span>${computer}</span>`;
      result = "Hai pareggiato!";
    }
  }
  if (userChoice === "carta") {
    userChoose.innerHTML = `<img src="img/carta.png"></img><span>${userChoice}</span>`;
    if (computer === "sasso") {
      computerChoose.innerHTML = `<img src="img/sasso.png"></img><span>${computer}</span>`;
      result = "Hai vinto!";
    } else if (computer === "carta") {
      computerChoose.innerHTML = `<img src="img/carta.png"></img><span>${computer}</span>`;
      result = "Hai pareggiato!";
    } else {
      computerChoose.innerHTML = `<img src="img/forbice.png"></img><span>${computer}</span>`;
      result = "Hai perso!";
    }
  }
  if (userChoice === "forbice") {
    userChoose.innerHTML = `<img src="img/forbice.png"></img><span>${userChoice}</span>`;
    if (computer === "sasso") {
      computerChoose.innerHTML = `<img src="img/sasso.png"></img><span>${computer}</span>`;
      result = "Hai perso!";
    } else if (computer === "carta") {
      computerChoose.innerHTML = `<img src="img/carta.png"></img><span>${computer}</span>`;
      result = "Hai vinto!";
    } else {
      computerChoose.innerHTML = `<img src="img/forbice.png"></img><span>${computer}</span>`;
      result = "Hai pareggiato!";
    }
  }

  if (result === "Hai vinto!") {
    score.vittorie += 1;
  } else if (result === "Hai perso!") {
    score.sconfitte += 1;
  } else {
    score.pareggi += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  win.innerHTML = score.vittorie;
  lose.innerHTML = score.sconfitte;
  tie.innerHTML = score.pareggi;

  endGame.innerHTML = `<p>${result}</p>`;
}
