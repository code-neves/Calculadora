// Get the input element with id 'result' and store it in a variable
let input = document.getElementById('result');

// Get the preview element with id 'preview' and store it in a variable
let preview = document.getElementById('result-preview');

// Function to insert a number or operator to the input element
function insert(num) {
  // Check if the input element value is equal to '0'
  if (input.value == '0') {
    // If so, set the input element value to an empty string
    input.value = '';
    preview.innerHTML = '';
  }
  // Append the number or operator to the input element value
  input.value += num;
  // Update the preview element with the input element value
}

// Function to calculate the result of the input expression
function calculate() {
  if (input.value != '0') {
    preview.innerHTML = input.value + ' = ';
    input.value = eval(input.value);
    /* preview.innerHTML += input.value; */
  } else {
    preview.innerHTML = '';
  }
}
/* function calculate() {
  // Use the built-in JavaScript eval() function to evaluate the input element value as an expression
  input.value = eval(input.value);
  // Update the preview element with the result
  preview.innerHTML;
}
 */
// Function to clear the input element value
function clearInput() {
  input.value = '0';
  // Update the preview element with the input element value
  preview.innerHTML = input.value;
}

// Function to delete the last character from the input element value
function deleteLast() {
  // Use the slice() method to remove the last character from the input element value
  input.value = input.value.slice(0, -1);
  // If the input element value is empty, set it to '0'
  if (input.value == '') {
    input.value = '0';
  }
  // Update the preview element with the input element value
  preview.innerHTML = '';
}

// Function to clear the input element value and reset it to '0'
function clearAll() {
  input.value = '0';
  preview.innerHTML = '';
}

// Function to add a parenthesis to the input element value
function addParenthesis() {
  // Check if the input element value is equal to '0'
  if (input.value == '0') {
    // If so, set the input element value to an open parenthesis
    input.value = '(';
  }
  // Check if the last character in the input element value is an open parenthesis, plus sign, minus sign, multiplication sign, or division sign
  else if (input.value.slice(-1) == '(' || input.value.slice(-1) == '+' || input.value.slice(-1) == '-' || input.value.slice(-1) == '*' || input.value.slice(-1) == '/') {
    // If so, append an open parenthesis to the input element value
    input.value += '(';
  }
  // Check if the last character in the input element value is not a closing parenthesis
  else if (input.value.slice(-1) != ')') {
    // If so, append a closing parenthesis to the input element value
    input.value += ')';
  }
  // Update the preview element with the input element value
  preview.innerHTML = input.value;
}
function addPercentage() {
  input.value = input.value / 100;
}