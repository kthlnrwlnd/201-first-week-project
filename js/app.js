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
var whereQuestion = (prompt('So, you think I am from Seattle? Answer "yes" or "no".')) .toLowerCase();

if(whereQuestion === 'no') {
  alert('Wrong!.' );
  console.log('Nope, I\'m from here.');
} else {
  alert('What gave it away?');
  console.log('Yes, I am a Seattle native, but not indigenous.');
}

//second question
var umbrellaQuestion = prompt('Do we carry an umbrella? Answer "yes" or "no"').toLowerCase();

if(umbrellaQuestion.toLowerCase() === 'yes') {
  alert('Nope!');
  console.log('Real Seattle people don\'t carry umbrellas.' );
} else {
  alert('That\'s right. The dang things break or get lost.');
  console.log('Real Seattle people don\'t carry umbrellas.');
}
//third question
var hikeQuestion = (prompt('Do you like hiking? Answer "yes" or "no".')) .toLowerCase();

if(hikeQuestion === 'no') {
  alert('Why else would I live here?' );
  console.log('People who live here have a religious attitude towards the mountains, especially Mount Rainer.');
} else {
  alert('I belong to REI.');
  console.log('People who live here have a religious attitude towards the mountains, especially Mount Rainer.');

}//fourth question
var rainQuestion = (prompt('What they say about Seattle raining all the time is exaggerated.  Answer "yes" if you agree and "no" if you disagree.')) .toLowerCase();

if(rainQuestion === 'no') {
  alert('We like to keep that secret.' );
  console.log('It just seems like it rains all the time here in Seattle.');
} else {
  alert('We like to keep that secret.');
  console.log('It just seems like it rains all the time here in Seattle.');

}//fifth question
var icecreamQuestion = (prompt('Do we eat lots of ice cream? Please answer "yes" if this is a true statement and "no" if it is a false statement.')) .toLowerCase();

if(icecreamQuestion === 'yes') {
  alert('Great! Let\'s stop this game and go find some.' );
  console.log('Seattle people are big coffee drinkers and icecream eaters.');
} else {
  alert('Well, I\'ll have to leave you now because I\'m headed to the store for some. ');
  console.log('Seattle people are big coffee drinkers and icecream eaters.');
}
// if(first condition) {
//   do this;
// } else if(second condition) {
//   do this;
// } else {
//   do this;
// }
