// ===== DOM Elements =====
const userscore = document.querySelector(".user");
const comscore = document.querySelector(".com");
let user = 0;
let com = 0;
const choices = document.querySelectorAll(".action");
const msg = document.querySelector(".msg");
const reset = document.querySelector(".reset");
const theme = document.querySelector(".theme");
const body = document.body;

// ===== THEME TOGGLE =====
theme.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        theme.innerHTML = "☀️";
    } else {
        theme.innerHTML = "🌜";
    }
});

// ===== RESET GAME =====
reset.addEventListener("click", () => {
    user = 0;
    com = 0;
    userscore.innerHTML = user;
    comscore.innerHTML = com;
    msg.innerHTML = "Play your move";
    msg.className = "msg"; 
});

// ===== COMPUTER CHOICE =====
const comchoice = () => {
    const option = ['rock', 'paper', 'scissor'];
    const idx = Math.floor(Math.random() * 3);
    return option[idx];
};

// ===== PLAY GAME =====
const playgame = (id) => {
    const comchoose = comchoice();
    
    // Reset message classes
    msg.className = "msg";
    
    if (id === comchoose) {
        msg.innerHTML = "🤝 Match Draw! Try Again";
        msg.classList.add("draw");
    }
    else if ((id === 'rock' && comchoose === 'scissor') || 
             (id === 'paper' && comchoose === 'rock') || 
             (id === 'scissor' && comchoose === 'paper')) {
        msg.innerHTML = "🏆 You Win!";
        msg.classList.add("win");
        user++;
        userscore.innerHTML = user;
    }
    else {
        msg.innerHTML = "💀 You Lose!";
        msg.classList.add("lose");
        com++;
        comscore.innerHTML = com;
    }
};

// ===== EVENT LISTENERS =====
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const id = choice.getAttribute("id");
        playgame(id);
    });
});
