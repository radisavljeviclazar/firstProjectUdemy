const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifier, 
  prevResult, 
  operationNumber, 
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
    logEntries.push(logEntry);
    console.log(logEntries);

};

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if(
    calculationType !== 'add' &&
    calculationType !== 'subtract' &&
    calculationType !== 'multiply' && 
    calculationType !== 'divide' ||
    ! enteredNumber === 0
  ) {
    return;
  }

  // if (calcuationType === 'add' ||
  //     calcuationType === 'subtract' ||
  //     calcuationType === 'multiply' ||  
  //     calcuationType === 'divide' 
  //   ) {

  //     }


  
  
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'add') {
    currentResult += enteredNumber;
    mathOperator = '+'; 
  } else if(calculationType === 'subtract') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if(calculationType === 'multiply') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'divide') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  
  
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog (calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('add');
}

function subtract() {
  calculateResult('subtract');
}

function multiply() {
  calculateResult('multiply');
}

function divide() {
  calculateResult('divide');
}


function calculate(operation){
  const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if (operation ==='ADD'){
    operator = '+';
 } else if (operation === 'SUBTRACT'){
    operator = '-';
 } else if (operation === 'MULTIPLY'){
    currentResult *= enteredNumber;
    operator = '*'; 
  } else {
    operator = '/';
  } 
  createAndWriteOutput (operator, initialResult, enteredNumber);
  writeToLog (operation, initialResult, enteredNumber, currentResult); 
  }

addBtn.addEventListener('click', calculate.bind(this, 'ADD' ));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));