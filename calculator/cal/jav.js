


let screen=document.getElementById("screen");
let cal="";

document.querySelectorAll("button").forEach(btn =>{
    btn.addEventListener("click",()=>{
       let value = btn.innerText;
    if(value === "C"){
        cal="";
        screen.innerText=" ";
    }
    else if(value === "="){
        cal=eval(cal);
        screen.innerText=cal;
    }
    else{
        cal+=value;
        screen.innerText=cal;
    }

    });
});

let load=document.getElementById("loader");


let calcu = document.getElementById("calcu");
      calcu.addEventListener("click",()=>{
            load.display="block"
            calcu.style.display="none"
            setTimeout(()=>{
                window.location.href="index.html";
            },2000);
    });
