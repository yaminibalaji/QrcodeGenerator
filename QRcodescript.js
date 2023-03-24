

let container = document.querySelector(".container "); // container is a class so we give .
let qrInput = document.querySelector("#text");// text is a id
let genearateBtn= document.querySelector("#generate-button"); // generate-button is a id so we give #
let img = document.querySelector("#qr-img");

let preInput;

genearateBtn.onclick=function(){
    
    let input = qrInput.value.trim()

    if(!input || input === preInput)
    {
        return 
    }
    else{
        preInput = input;
        genearateBtn.innerText = "Generating QR Code..";
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
        img.onload = function(){
            container.classList.add("active");
            genearateBtn.innerText = "Generate QR Code";
        }
    }
}