const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// console.log(characters.length)
let pwd1 = document.getElementById("pwd-1")
let pwd2 = document.getElementById("pwd-2")

function generate() {
    let tmp = ""
    for (let i = 0; i < 15; i++) {
        tmp += characters[Math.floor(Math.random() * 91)]
    }
    return tmp    
}

function showPwd() {
    pwd1.textContent = generate()
    pwd2.textContent = generate()
}