let r1 = Math.floor((Math.random()*100)+1);
let r2 = Math.floor((Math.random()*100)+1);
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let pan = document.getElementById("pan").value;
let lamt = document.getElementById("lamt").value;
function captchacreate(r1,r2,operator="*"){
    let text=""+r1+operator+r2;
    //drawing canvas for captcha
    const canvas = document.getElementById("mycaptcha");
    const ctx = canvas.getContext('2d');
    ctx.font='100px serif';
    // ctx.textAlign='center'; 
    ctx.fillText(text,100,100);
}

function captchatest(){
    const user_ans = document.getElementById("cpt").value;
    let result=r1*r2;
    if(user_ans == result)
        console.log("True");
    else
        console.log("False");
    
}


captchacreate(r1,r2);//genertes captcha
document.getElementById("cpt").onclick = captchatest;


