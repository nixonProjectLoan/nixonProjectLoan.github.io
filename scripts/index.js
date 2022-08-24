let r1 = Math.floor((Math.random()*100)+1);
let r2 = Math.floor((Math.random()*10)+1);
let name = document.getElementById("name");
let email = document.getElementById("email");
let pan = document.getElementById("pan");
let lamt = document.getElementById("lamt");
const captchaCanvas = document.getElementById("mycaptcha");


// functions
function createCaptcha(r1,r2,operator="*"){
    let text=""+r1+operator+r2;
    //drawing canvas for captcha    
    const canvas = captchaCanvas.getContext('2d');
    canvas.font='100px serif';
    canvas.fillText(text,50,100);
}

function captchatest(){
    const user_ans = document.getElementById("cpt").value;
    let result=r1*r2;
    if(user_ans == result)
        console.log("True");
    else
        console.log("False");
    
}
function numtoWords(num){
const oneNine=[one,two,three,four,five,six,seven,eight,nine];
const tenNinenty=[ten,twenty,thirty,fourty,fifty,sisxty,seventy,eighty,ninety]

num = num.toFixed(0)
console.log()
 if(num>=9&num<=80)
        tenNinenty[]:

    }   
    if(num>=0 & num<=8){
        oneNine[num]
    }

}


captchacreate(r1,r2);//genertes captcha
//events
document.getElementById("cpt").onclick = captchatest;



