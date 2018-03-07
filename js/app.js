'use strict';

// IF/ELSE

// PSEUDOCODE
// if(some condition is met) {
//   do this 
// } else {
//   do something different
// }
alert("Star light, star bright, hope you ain't no Seattlite.");

//first question
var whereQuestion = (prompt('So you think I am from Seattle? Please answer "yes" or "no".')) .toLowerCase();

if(whereQuestion === 'no') {
  alert('User guessed wrong.' );
  console.log('Wrong!');
} else {
  alert('What gave it away?');
  console.log('Yes, I am a from Seattle.');
}

//second question
var myUmbrella = prompt('Do I carry an umbrella? Please enter "yes" or "no"').toLowerCase();


// 'yes', 'YES', 'Y', 'y', YeS, NO, no, No, nO, n, N, nope, nah, yep

if(myUmbrella.toLowerCase() === 'yes') {
  alert('That is correct!');
} else {
  alert('No, I am older than 30!');
}
//third question
// if(first condition) {
//   do this;
// } else if(second condition) {
//   do this;
// } else {
//   do this;
// }
