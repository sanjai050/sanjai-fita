function handlesubmit(){
let emailinput =document.getElementById("emailinput") 
let result = document.getElementById("result")
console.log("submiting...")
console.log("emailinput.value")
    if(emailinput.value == ""){
        console.log("pls fill the email")
        result.innerText="pls fill the email"
        emailinput.style.border="05px solid red"
    }else{
        console.log("for submitted")
        result.innerText="form sumbitted"
    }
}
console.log("submiting...")
