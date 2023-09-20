let textbox1=document.querySelector(".input1")
let textbox2=document.querySelector(".input2")
let btn=document.getElementById("sign-in-btn")

let msg1=document.querySelector(".error1")
let msg2=document.querySelector(".error2")

textbox1.addEventListener('focus', function(){
    msg1.style.display="inline";
    textbox1.style.outline="red"
    
})
textbox1.addEventListener('keypress', function(){
    msg1.style.display="none"; 
})
textbox1.addEventListener('blur', function(){
    msg1.style.display="none";
    
})

textbox2.addEventListener('focus', function(){
    msg2.style.display="inline";
    textbox2.style.outline="none"
})
textbox2.addEventListener('keypress', function(){
    msg2.style.display="none";
})
textbox2.addEventListener('blur', function(){
    msg2.style.display="none";
})

// btn.addEventListener("focus",function(){
//     msg1.style.display="inline";
//     msg2.style.display="inline";
// })


let learnMore=document.getElementById("learn-more");
let PrivacyMsg= document.querySelector(".privacy-msg")

learnMore.addEventListener('click', function(){
    PrivacyMsg.style.display="block"
    learnMore.style.display="none"
})