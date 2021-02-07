

//adding
document.querySelector('#add').addEventListener('click', addingButton)

function addingButton(){

    const gettingValue = document.querySelector('#number1').value
    const gettingValue2 = document.querySelector('#number2').value
    const sumTotal = parseFloat(gettingValue) + parseFloat(gettingValue2)
    
    document.querySelector('#calculationOutput').innerText = `${sumTotal}`
}

//subtracting
document.querySelector('#subtract').addEventListener('click', subtractButton)

function subtractButton() {
    const gettingValue = document.querySelector('#number1').value
    const gettingValue2 = document.querySelector('#number2').value
    const subtractTotal = parseFloat(gettingValue) - parseFloat(gettingValue2)

    document.querySelector('#calculationOutput').innerText = `${subtractTotal}`
}

//multiply
document.querySelector('#multiply').addEventListener('click', multButtonFunction)

function multButtonFunction (){
    const gettingValue = document.querySelector('#number1').value
    const gettingValue2 = document.querySelector('#number2').value
    const multOfNumbers = parseFloat(gettingValue) * parseFloat(gettingValue2)

    document.querySelector('#calculationOutput').innerText = `${multOfNumbers}`
}

//divide
document.querySelector("#divide").addEventListener('click', divideFunction)

function divideFunction (){
    const gettingValue = document.querySelector('#number1').value
    const gettingValue2 = document.querySelector('#number2').value
    const theMathDivide = parseFloat(gettingValue) / parseFloat(gettingValue2)

    document.querySelector('#calculationOutput').innerText = `${theMathDivide}`
}

//modulus and grabbing by id for practice
document.getElementById('modulo').addEventListener('click', modulusFunction)

function modulusFunction (){
    const gettingValue = document.getElementById('number1').value
    const gettingValue2 = document.getElementById('number2').value
    const modulusCalc = parseFloat(gettingValue) % parseFloat(gettingValue2)

    document.getElementById('calculationOutput').innerText = `${modulusCalc}`
}