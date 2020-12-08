/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇

let rand = Math.ceil(Math.random() * 6);

const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const dice3 = document.getElementById('dice3');
const dice4 = document.getElementById('dice4');
const dice5 = document.getElementById('dice5');
const dice6 = document.getElementById('dice6');

switch(rand) {
    case 1:
      dice1.classList.remove('hidden');
      break;
    case 2:
      dice2.classList.remove('hidden');
      break;
    case 3:
      dice3.classList.remove('hidden');
      break;
    case 4:
      dice4.classList.remove('hidden');
      break;
    case 5:
      dice5.classList.remove('hidden');
      break;
    case 6:
      dice6.classList.remove('hidden');
      break;
  }

/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
