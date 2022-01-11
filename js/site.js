function getNumber(){
    let startNumber = document.getElementById("startValue").value;
    let endNumber = document.getElementById("endValue").value;
    let numbers = [];
    startNumber = parseInt(startNumber);
    endNumber = parseInt(endNumber)

    if(Number.isInteger(startNumber) && Number.isInteger(endNumber)){
        let numbers = generateNumbers(startNumber, endNumber)
        displayNumbers(numbers)
    }
    else{
        alert("You must enter integers")
    }
}

function generateNumbers(sNum, eNum){
    let numbers = [];
    for(let index = sNum; index <= eNum; index++){
        numbers.push(index);
    }
    return numbers;
}

function displayNumbers(numbers){
    let className = "even";
    let templateRows = "";
    for(let index = 0; index < numbers.length; index++){
        let number = numbers[index];
        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}