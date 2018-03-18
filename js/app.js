'use strict';

alert('Star light, star bright, hope you ain\'t no Seattlite.');

// //first question
// function question1() {
//   var whereQuestion = prompt('So, you think I am from Seattle? Answer "yes" or "no".').toLowerCase();

//   if (whereQuestion === 'no' || whereQuestion === 'n') {
//     alert('Wrong!.');
//     console.log('Nope, I\'m from here.');
//   } else {
//     alert('What gave it away?');
//     console.log('Yes, I am a Seattle native, but not indigenous.');
//   }
// }

// question1();

// //second question

// function question2() {
//   var umbrellaQuestion = prompt('Do we carry an umbrella? Answer "yes" or "no"').toLowerCase();

//   if (umbrellaQuestion.toLowerCase() === 'yes' || 'y') {
//     alert('Nope!');
//     console.log('Real Seattle people don\'t carry umbrellas.');
//   } else {
//     alert('That\'s right. The dang things break or get lost.');
//     console.log('Real Seattle people don\'t carry umbrellas.');
//   }
// }

// question2();
// //third question
// function question3() {
//   var hikeQuestion = (prompt('Do you like hiking? Answer "yes" or "no".')).toLowerCase();

//   if (hikeQuestion === 'no' || 'n') {
//     alert('Why else would I live here?');
//     console.log('People who live here have a religious attitude towards the mountains, especially Mount Rainer.');
//   } else {
//     alert('I belong to REI.');
//     console.log('People who live here have a religious attitude towards the mountains, especially Mount Rainer.');

//   }
// }
// question3();
// //fourth question
// function question4() {
//   var rainQuestion = (prompt('What they say about Seattle raining all the time is exaggerated.  Answer "yes" if you agree and "no" if you disagree.')).toLowerCase();

//   if (rainQuestion === 'no' || 'n') {
//     alert('We like to keep that secret.');
//     console.log('It just seems like it rains all the time here in Seattle.');
//   } else {
//     alert('We like to keep that secret.');
//     console.log('It just seems like it rains all the time here in Seattle.');

//   }
// }
// question4();
// //fifth question
// function question5() {
//   var iceCreamQuestion = (prompt('Do we eat lots of ice cream? Please answer "yes" if this is a true statement and "no" if it is a false statement.')).toLowerCase();

//   if (iceCreamQuestion === 'yes' || 'y') {
//     alert('YES! Let\'s stop this game and go find some.');
//     console.log('Seattle people are big coffee drinkers and icecream eaters.');
//   } else {
//     alert('Well, I\'ll have to leave you now because I\'m headed to the store for some. ');
//     console.log('Seattle people are big coffee drinkers and icecream eaters.');
//   }
// }
// question5();

 //sixth question/4 trys /displays "too high" or "too low"
//function question6() {
  var birthYear = 1960;
  var yearGuess = prompt('Can you guess what year I was born?');
  yearGuess = parseInt(yearGuess);
  var guessCorrect = false;
     j = 0;

 for (j = 0; j < 4; j++) {
 if (yearGuess === birthYear) {
   alert('You got it!');
 //guessCorrect = true;
 } else if (yearGuess < birthYear) {
 //numberAttempts++;
   alert('Too low! Guess again.');
   // yearGuess = parseInt(yearGuess);
 } else if (yearGuess > birthYear) {
   //numberAttempts++;
  alert('Too high! Guess again.');
   //yearGuess = parseInt(yearGuess);
 } else { 
   alert('Next question!');
 }



//console.log('It took you' + numberAttempts + 'attempts!');
//}
//question6();
// //seventh question ?6 trys / lists all possible answers

// function question7() {
//   var statesVisited = ['Oregon', 'California', 'Hawaii', 'Arizona','Utah', 'Idaho','Montana', 'Wyoming', 'Colorado', 'New Mexico',  'Minnisota', 'Wisconsin', ];

//   var stateQuestion = prompt('Can you guess one of the United States I have visited?').toLowerCase();
  
//   for(var i = 0; i < statesVisited.length; i++){
//     console.log(i);
//     if(statesVisited[i] === stateQuestion) {
//       console.log('Correct!');
//       break;
//     } else {
//       console.log('Nope!');
//     }
//   }

//   //*var statesVisited = [, 'Montana', 'Wyoming', 'Colorado', 'New Mexico', 'El Paso\,Texas', 'Nebraska', 'Minnisota', 'Wisconsin', 'Illinois', 'New York',' Washington\, D.C.'];
//   //var statesQuestion = prompt('Can you guess any of the states I have visited?');

  
//   //var answer = false
//   //var guessCount = 0;

//   while (answer === false) {
//     if (answerAttempts === 0) {
//       var statesQuestion = prompt('Can you guess a state I have visited?');
//       console.log(statesQuestion);
//       //guessCorrect = true;
//     } else if (yearGuess < birthYear) {
//       answerAttempts++;
//       yearGuess = prompt('Too low! Guess again.');
//       yearGuess = parseInt(yearGuess);
//     } else if (yearGuess > birthYear) {
//       answerAttempts++;
//       yearGuess = prompt('Too high! Guess again.');
//       yearGuess = parseInt(yearGuess);
//     }
//   }

//   console.log('It took you ' + amswerAttempts + ' attempts!');
// }



// //tally /lists number of correct answers/ message with user name and tally 