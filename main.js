//variables here

let userInput;
let userPin = 1234;
let userBalance = 1200;
let enteredPIN; 

//functions here

const checkPin = () => {
    userInput = prompt('Please tell me your pin: ')
    console.log(userInput);

    if (userInput == userPin){
        alert('Its you!!') 
        enteredPIN = true
        console.log(enteredPIN) 
        options()
    }
    else{
        alert('Umm... go away')
        enteredPIN = false
    }
}

const withDrawCash = () => {
    userInput = prompt ('How much would you like to withdraw?')
    console.log(userInput);

    if (userInput < userBalance){
        alert('Processing your request, here is your cash')
        userBalance -= userInput
        alert(`Your new balance is ${userBalance}`)
    }
    else {
        alert('insufficient funds, please try again later.')
    }
}

const changePIN = () => {
    userInput = prompt('To change your PIN, please enter your current PIN')
    if (userInput == userPin){
        userInput = prompt('Please enter your new PIN')
        userPin = userInput
        console.log(userPin)
    }
    else{
        alert('incorrect PIN try again later')
    }
}

const depositCash = () => {
    userInput = prompt('How much would you like to deposit?')
   
    userBalance += parseInt(userInput)  
    alert(`Your new balance is ${userBalance}`)
}

const checkBalance = () => {
    alert(`Your current balance is £${userBalance}`)
    options()
}

const options = () => {
    userInput = prompt('What would you like to do?? \n 1. Withdraw Cash \n 2. Change PIN \n 3. Deposit Cash \n 4. Check Balance')

    if (userInput == 1 || userInput == 'Withdraw Cash'){
        withDrawCash()
    }
    else if (userInput == 2 || userInput == 'Change PIN'){
        changePIN()
    }
    else if (userInput == 3 || userInput == 'Deposit Cash'){
        depositCash()
    }
    else if (userInput == 4 || userInput == 'Check Balance'){
        checkBalance()
    }
    else {
        alert('No action selected, try again later')
    }
}
//main code
alert('Hello')
checkPin();
