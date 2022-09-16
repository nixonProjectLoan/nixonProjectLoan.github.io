"use strict";

let r1 = String(Math.floor((Math.random()*100)+1));
let r2 = String(Math.floor((Math.random()*10)+1));
let operator = (Math.floor((Math.random()*10))%2) ? "*": (Math.floor((Math.random()*10)+1)%3) ? "+": (Math.floor((Math.random()*10)+1)%5) ? "-" : (Math.floor((Math.random()*10)+1)%7) ? "/": "^";
let name = document.getElementById("name");
let email = document.getElementById("email");
let pan = document.getElementById("pan");
let lamt = document.getElementById("lamt");
let cpt = document.getElementById("cpt");
let inwords = document.getElementById("inwords");
const captchaCanvas = document.getElementById("mycaptcha");


// functions
function createCaptcha(){
    let text=r1+operator+r2;
    //drawing canvas for captcha    
    const canvas = captchaCanvas.getContext('2d');
    canvas.font='100px serif';
    canvas.fillText(text,50,100);
}

function captchatest(){
    const user_ans = document.getElementById("cpt").value;
    let result=Number(r1+operator+r2);
    if(user_ans == result){
        document.getElementById("cpt").style.backgroundColor= "green";
        console.log("True");
    }
    else{
        document.getElementById("cpt").style.backgroundColor= "red";
        console.log("False");
    }
}

function numtoWords(num){
    //convert no to words
    const oneNine=["one","two","three","four","five","six","seven","eight","nine"];
    const eleNineteen=["eleven","tweleve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    const tenNinenty=["ten","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninety"];

    let sentence=""; 
    length = num.length;
     
    /*
    0 1 2 3 4 5 6 7 8
    9 9 9 9 9 9 9 9 9
    | | | | | | | | |
    | | | | | | | | ones
    | | | | | | | tens
    | | | | | | hundered
    | | | | | thousand
    | | | | ten thousand
    | | | lakh
    | | ten lakh
    | crore
    ten crore
    */
	const hundered = function(){ //hundered
		if(num[length-2]== 0 & num[length-1]==0 & num[length-3]>=1 & num[length-3]<=9){//if hundered no is in 1-9 and tens , ones is 0
			sentence+= oneNine[num[length-3]-1]+" "+"hundered"+" ";
		}
		else if(num[length-2]!= 0 & num[length-1]!=0 & num[length-3]>=1 & num[length-3]<=9){//if hundered no is in 1-9 and tens , ones is not 0
			sentence+=oneNine[num[length-3]-1]+" "+"hundered"+" &"+" "; 

			//tens
			if(num[length-2]>=1 & num[length-2]<=9 & num[length-1]==0){ //if tens no is in 1-9 and ones is 0
				sentence+=tenNinenty[num[length-2]-1]+" ";
			}
			else if(num[length-2]==1 & num[length-1]>=1 & num[length-1]<=9){ //if tens no is 1 and ones is 1-9
				sentence+=eleNineteen[num[length-1]-1]+" ";
			}
			else if(num[length-2]>=2 & num[length-2]<=9 & num[length-1]>=1 & num[length-1]<=9){ //if tens no is in 2-9 and ones is 1-9
				sentence+=tenNinenty[num[length-2]-1]+" ";
				sentence+=oneNine[num[length-1]-1]+" ";
			}
            
		}
	};
    const thousand = function(){
        //ten thousand
			if((num[length-5]>=1 & num[length-5]<=9) & num[length-4]== 0 ){//if ten thousand no is in 1-9 and thousand is 0
				sentence+= tenNinenty[num[length-5]-1]+" "+"thousand"+" ";
				hundered();
				
			}
            else if((num[length-5]>=2 & num[length-5]<=9) & num[length-4]>=1 & num[length-4]<=9){
                sentence+=tenNinenty[num[length-5]-1]+oneNine[num[length-4]-1]+" "+"thousand"+" ";
                hundered();
            }
			else if(num[length-5]==1 & num[length-4]>=1 & num[length-4]<=9){//if thousand no is 1 and thousand is 1-9
				sentence+= eleNineteen[num[length-5]-1]+" "+"thousand"+" ";
				hundered();
			}
			//thousand
			else if(num[length-4]>=1 & num[length-4]<=9){//if thousand no is in 1-9 
				sentence+= oneNine[num[length-4]-1]+" "+"thousand"+" ";
				hundered();

			}
    };

    if(length == 1 & num[length-1]==0){
        sentence="zero";
    }
    else if(length == 1 & num[length-1]>=1 & num[length-1]<=9){
        sentence+=oneNine[num[length-1]-1]+" ";
    }
    else{
        //ten lakh
        if(num[length-6]>=1 & num[length-6]<=9 & num[length-7] == 1){
            sentence+= eleNineteen[num[length-7]-1]+" "+"lakh"+" ";
            thousand();
        }  
        else if(num[length-7]>=2 & num[length-7]<=9 & num[length-6]>=1 & num[length-6]<=9){
            sentence+=tenNinenty[num[length-7]-1]+oneNine[num[length-6]-1]+" "+"lakh"+" ";
            thousand();
        }
        else if (num[length-6]>=1 & num[length-6]<=9){
            sentence+= oneNine[num[length-6]-1]+" "+"lakh"+" ";
            thousand();
        }
    }        
    console.log(sentence);
    sentence+=" "+"Rs."
    return sentence;
}
function validation(){
    switch(this.name){
        case "email":
            console.log("email is invalid");
            if(this.validity.patterMismatch){
                
            }
            break;        
        case "name":
            console.log("name is invalid");
            break;
        case "pan":
            console.log("pan is invalid");
            break;
        case "lamt":
            console.log("lamt is invalid");
            break;
        case "cpt":
            console.log("captcha is invalid");
            break;
   }

}

//events
// email.addEventListener('invalid',)
document.getElementById("refresh").addEventListener("onclick",createCaptcha(r1,r2));//genertes captcha

// //event
cpt.addEventListener( "change", captchatest());

//test

inwords.value = numtoWords(lamt.value);


