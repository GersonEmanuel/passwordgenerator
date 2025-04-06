const inputpasswordEl = document.querySelector("#password")
const uppercaseEl = document.querySelector("#uppercase-check")
const specialcharsEl = document.querySelector("#specialcharacters-check")
const numbersEl = document.querySelector("#numbers-check")
let securityindicatorbarEl = document.querySelector("#security-indicator-bar")


function generatepassword() {
    const passwordlength = passwordlengthEL.value

    let chars = "abcdefghijklmnopqrstuvwxyz"
    const Upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers = "0123456789"
    const specialchars = "!#$%&()*+,-./:;<=>?@[]^_{|}~"


    if(uppercaseEl.checked){
        chars += Upperchars
    }
    if(numbersEl.checked){
        chars += numbers
    }
    if(specialcharsEl.checked){
        chars += specialchars
    }

    let password = ""

    for(let i = 0; i<passwordlength; i++){
        const randomnumber = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomnumber, randomnumber + 1)

    }
    inputpasswordEl.value = password
    calculatequality()
}

function calculatequality(){
    const passwordlength = passwordlengthEL.value
    let percent = Math.round((passwordlength /64) * 100)
    securityindicatorbarEl.style.width = `${percent}%`
    
}

function copy() {
    navigator.clipboard.writeText(inputpasswordEl.value)
}

const passwordlengthEL = document.querySelector("#password-length")

passwordlengthEL.addEventListener("input", function(){
    const passwordlength = passwordlengthEL.value
    document.querySelector("#password-length-text").innerText = passwordlength
    generatepassword(passwordlength)

})


uppercaseEl.addEventListener("click", generatepassword)
specialcharsEl.addEventListener("click", generatepassword)
numbersEl.addEventListener("click", generatepassword)




const copybuttonEl = document.querySelector("#copy")
copybuttonEl.addEventListener("click", copy)

generatepassword()
