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
    calculatefontsize()
}

function calculatequality(){
    const passwordlength = passwordlengthEL.value
    let percent = Math.round(
        (passwordlength / 64)* 25 +
        (uppercaseEl.checked ? 15 : 0) +
        (numbersEl.checked ? 25 :0) + 
        (specialcharsEl.checked ? 35 : 0))
    securityindicatorbarEl.style.width = `${percent}%`

    if(percent>69){
        securityindicatorbarEl.classList.remove('critical')
        securityindicatorbarEl.classList.remove('warning')
        securityindicatorbarEl.classList.add('safe')
    
    } else if(percent>50){
        securityindicatorbarEl.classList.remove('critical')
        securityindicatorbarEl.classList.add('warning')
        securityindicatorbarEl.classList.remove('safe')

    } else {
        securityindicatorbarEl.classList.add('critical')
        securityindicatorbarEl.classList.remove('warning')
        securityindicatorbarEl.classList.remove('safe')
    }
 
}

function calculatefontsize(){
    const passwordlength = passwordlengthEL.value
    if(passwordlength>45) {
        inputpasswordEl.classList.remove('font-sm')
        inputpasswordEl.classList.remove('font-xs')
        inputpasswordEl.classList.add('font-xxs')
    } else if(passwordlength>32){
        inputpasswordEl.classList.remove('font-sm')
        inputpasswordEl.classList.add('font-xs')
        inputpasswordEl.classList.remove('font-xxs')
    } else if(passwordlength> 22){
        inputpasswordEl.classList.add('font-sm')
        inputpasswordEl.classList.remove('font-xs')
        inputpasswordEl.classList.remove('font-xxs')
    } else{
        inputpasswordEl.classList.remove('font-sm')
        inputpasswordEl.classList.remove('font-xs')
        inputpasswordEl.classList.remove('font-xxs')
    }

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

document.querySelector("#new_password").addEventListener("click", generatepassword)

generatepassword()
