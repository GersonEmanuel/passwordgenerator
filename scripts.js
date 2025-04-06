let passwordleng = 16;
const inputpasswordEl = document.querySelector("#password")


function generatepassword(passwordlength) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,-./:;<=>?@[]^_{|}~"

    let password = ""

    for(let i = 0; i<passwordlength; i++){
        const randomnumber = Math.floor(Math.random()*chars.length)
        password += chars.substring(randomnumber, randomnumber + 1)

    }
    inputpasswordEl.value = password
}

function copy() {
    navigator.clipboard.writeText(inputpasswordEl.value)
}

const passwordlengthEL = document.querySelector("#password-length")
passwordlengthEL.addEventListener("input", function(){
    const passwordlength = passwordlengthEL.value
    generatepassword(passwordlength)
})

const copybuttonEl = document.querySelector("#copy")
copybuttonEl.addEventListener("click", copy)

generatepassword(passwordlength)