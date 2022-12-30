var homeContainer = document.getElementsByClassName('homeContainer')[0];


/* Add a label text and call it - hidden number. */
var hiddenNumber = document.createElement('div');
hiddenNumber.innerHTML = 'Hidden Number';
homeContainer.appendChild(hiddenNumber);
/* Generate a random four digit number and hide it. */
var randomNumber = Math.floor(Math.random() * 9000) + 1000;
var hiddenNumber = document.createElement('div');
hiddenNumber.innerHTML = randomNumber;
homeContainer.appendChild(hiddenNumber);
/* hide the hiddenNumber */
hiddenNumber.style.display = 'none';
/* add four stars next to the hidden number label */
var stars = document.createElement('div');
stars.innerHTML = '****';
homeContainer.appendChild(stars);
/* Add input box for the user to insert guesses */
var inputBox = document.createElement('input');
inputBox.setAttribute('type', 'text');
inputBox.setAttribute('id', 'inputBox');
homeContainer.appendChild(inputBox);
/* Add a button which submits guesses */
var submitButton = document.createElement('button');
submitButton.innerHTML = 'Submit';
homeContainer.appendChild(submitButton);
/* Add a counter "Number of guesses: " below the submit button, initialize it to 0 */
var counter = document.createElement('div');
counter.innerHTML = 'Number of guesses: 0';
homeContainer.appendChild(counter);
/* When submit is clicked, increment the counter by one. Check each digit from the inputBox if the digit is equal to the digit in the same place from the hiddenNumber, increment bullCounter, else if the hiddenNumber contains the digit, increment cowCounter. Show a label "Number of cows: " and append the cowCounter. Show a label "Number of bulls: " and append the bullCounter. Show a label "Your guess was: " and append the submitted number. Reset the bullCounter and cowCounter after each submit. If the submitted number is equal to the hiddenNumber show a large "Congratulations you guessed it right" green text. */
var bullCounter = 0;
var cowCounter = 0;
var guessCounter = 0;
submitButton.onclick = function() {
  guessCounter++;
  counter.innerHTML = 'Number of guesses: ' + guessCounter;
  var inputNumber = document.getElementById('inputBox').value;
  var inputNumberArray = inputNumber.split('');
  var hiddenNumberArray = hiddenNumber.innerHTML.split('');
  for (var i = 0; i < inputNumberArray.length; i++) {
    if (inputNumberArray[i] == hiddenNumberArray[i]) {
      bullCounter++;
    } else if (hiddenNumberArray.indexOf(inputNumberArray[i]) != -1) {
      cowCounter++;
    }
  }
  var cows = document.createElement('div');
  cows.innerHTML = 'Number of cows: ' + cowCounter;
  homeContainer.appendChild(cows);
  var bulls = document.createElement('div');
  bulls.innerHTML = 'Number of bulls: ' + bullCounter;
  homeContainer.appendChild(bulls);
  var guess = document.createElement('div');
  guess.innerHTML = 'Your guess was: ' + inputNumber;
  homeContainer.appendChild(guess);
  if (inputNumber == hiddenNumber.innerHTML) {
    var congrats = document.createElement('div');
    congrats.innerHTML = 'Congratulations you guessed it right';
    congrats.style.color = 'green';
    congrats.style.fontSize = '50px';
    homeContainer.appendChild(congrats);
  }
  bullCounter = 0;
  cowCounter = 0;
}
/* Add a button below the submit labeled "I give up". When clicked, reveal the hidden number in the place of the star element. */
var giveUpButton = document.createElement('button');
giveUpButton.innerHTML = 'I give up';
homeContainer.appendChild(giveUpButton);
giveUpButton.onclick = function() {
  stars.innerHTML = hiddenNumber.innerHTML;
}
/* Add try again button which refreshes the page */
var tryAgainButton = document.createElement('button');
tryAgainButton.innerHTML = 'Try again';
homeContainer.appendChild(tryAgainButton);
tryAgainButton.onclick = function() {
  location.reload();
}
/* make the buttons look better and add some margins around them */
submitButton.style.margin = '10px';
giveUpButton.style.margin = '10px';
tryAgainButton.style.margin = '10px';
/* add some simple styling for the buttons */
submitButton.style.backgroundColor = '#4CAF50';
submitButton.style.border = 'none';
submitButton.style.color = 'white';
submitButton.style.padding = '15px 32px';
submitButton.style.textAlign = 'center';
submitButton.style.textDecoration = 'none';
submitButton.style.display = 'inline-block';
submitButton.style.fontSize = '16px';
giveUpButton.style.backgroundColor = '#4CAF50';
giveUpButton.style.border = 'none';
giveUpButton.style.color = 'white';
giveUpButton.style.padding = '15px 32px';
giveUpButton.style.textAlign = 'center';
giveUpButton.style.textDecoration = 'none';
giveUpButton.style.display = 'inline-block';
giveUpButton.style.fontSize = '16px';
tryAgainButton.style.backgroundColor = '#4CAF50';
tryAgainButton.style.border = 'none';
tryAgainButton.style.color = 'white';
tryAgainButton.style.padding = '15px 32px';
tryAgainButton.style.textAlign = 'center';
tryAgainButton.style.textDecoration = 'none';
tryAgainButton.style.display = 'inline-block';
tryAgainButton.style.fontSize = '16px';
/* add hover over effect for the buttons */
submitButton.style.transition = '0.3s';
submitButton.onmouseover = function() {
  submitButton.style.backgroundColor = '#3e8e41';
}
submitButton.onmouseout = function() {
  submitButton.style.backgroundColor = '#4CAF50';
}
giveUpButton.style.transition = '0.3s';
giveUpButton.onmouseover = function() {
  giveUpButton.style.backgroundColor = '#3e8e41';
}
giveUpButton.onmouseout = function() {
  giveUpButton.style.backgroundColor = '#4CAF50';
}
tryAgainButton.style.transition = '0.3s';
tryAgainButton.onmouseover = function() {
  tryAgainButton.style.backgroundColor = '#3e8e41';
}
tryAgainButton.onmouseout = function() {
  tryAgainButton.style.backgroundColor = '#4CAF50';
}
/* make the number of guesses and the counter same color as the buttons */
counter.style.color = '#4CAF50';
