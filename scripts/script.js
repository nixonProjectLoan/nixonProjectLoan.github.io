let r1 = Math.floor((Math.random()*100)+1);
let r2 = Math.floor((Math.random()*100)+1);



function captcha(r1,r2,operator="*"){
let text=""+r1+operator+r2;
//drawing canvas for captcha
const canvas = document.getElementById("mycaptcha");
const ctx = canvas.getContext('2d');
ctx.font='100px serif';
// ctx.textAlign='center'; 
ctx.fillText(text,100,100);
}


captcha(r1,r2);
document.getElementById("cpt").onclick=captchatest;
function captchatest(){

    const user_ans = document.getElementById("cpt");
    let result=r1*r2;
    if(user_ans == result)
        console.log("True");
    else
        console.log("False");
    
}