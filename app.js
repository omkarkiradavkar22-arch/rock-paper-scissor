let userscore=document.querySelector(".user");
let comscore=document.querySelector(".com");
let user =0;
let com=0;
const choices =document.querySelectorAll(".action");
const msg =document.querySelector(".msg");

const reset=document.querySelector(".reset");

const theme=document.querySelector(".theme");
const body=document.body;
theme.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        theme.innerHTML = "☀️";
        body.style.backgroundColor="black";
    }
    else{
        theme.innerHTML = "🌜";
        body.style.backgroundColor="white";
    }
});
reset.addEventListener("click",()=>{
    user=0;
    com=0;
    userscore.innerHTML=user;
    comscore.innerHTML=com;
    console.log("game reset");
})

const comchoice=()=>{
    const option =['rock','paper','scissor'];
    const idx= Math.floor(Math.random()*3);
    return option[idx];
}

const playgame=(id)=>{
    console.log("user choose=",id);
    const comchoose =comchoice();
    console.log("computer choice=",comchoose);
    if(id===comchoose){

        msg.innerHTML="match draw. try again";
        msg.style.backgroundColor = "gray";
        console.log("match draw.");
    }
    else if((id=='rock'&& comchoose=='scissor')||(id=='paper'&& comchoose=='rock')||(id =='scissor'&&comchoose=='paper')){

        console.log("user is winner");
        msg.innerHTML="You Win🏆!";
        msg.style.backgroundColor = "green";
        user++;
        userscore.innerHTML=user;
        console.log(user);
    }
    else
    {
        console.log("computer is winner");
    msg.innerHTML="you lose";
    msg.style.backgroundColor = "red";
    com++;
    comscore.innerHTML=com;
    console.log(com);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const id =choice.getAttribute("id")
        playgame(id);
    });
});
