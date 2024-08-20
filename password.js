let password = "";
let length = 10;

const number = "0123456789";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";

const buttons = document.querySelectorAll(".btn");
const display = document.getElementById("textfield");

buttons.forEach((button) => {
    button.addEventListener("click",(e) => {
        console.log(e.target);
        if(e.target.innerHTML == "Number"){
            while(length > password.length){
                password += uppercase[Math.floor(Math.random()* uppercase.length)];
            password += lowercase[Math.floor(Math.random()* lowercase.length)];
            password += number[Math.floor(Math.random()* number.length)];
            display.value = password;
            }  
        }
        else if(e.target.innerHTML == "Character"){
            while(length > password.length){
            password += uppercase[Math.floor(Math.random()* uppercase.length)];
            password += lowercase[Math.floor(Math.random()* lowercase.length)];
            display.value = password;
            }  
        }
        else if(e.target.innerHTML == "Delete"){
            password = "";
            display.value = password;
        };
    });
});

