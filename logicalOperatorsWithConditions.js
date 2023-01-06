var password = "Marigold9"
// if (logic that evals to true or false) {
// here is code if true
// } 
if (password.length >= 8 && password.includes("#")) {
    console.log(`Got it, Here is your password: ${password}`)
} else {
    console.log(`So Close but not yet your password is ${password}`)
}