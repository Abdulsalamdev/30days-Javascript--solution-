// Exercises: Level 1
// 1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "abdulsalam";
let lastName = "akinyoola";
let country = "nigeria";
let city = "ibadan";
let age = " 17";
let isMarried = false;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof city);
console.log(typeof age);
console.log(typeof country);
console.log(typeof isMarried);
// 2 Check if type of '10' is equal to 10
console.log(typeof "10" == 10);
// 3 Check if parseInt('9.8') is equal to 10
console.log(typeof parseInt("9.8") == 10);
// 4 Boolean value is either true or false.
console.log(true || false);
// 5 Write three JavaScript statement which provide truthy value.
console.log(3 > 2);
// 6 Write three JavaScript statement which provide falsy value.
console.log(3 < 2);
// 7 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// 4 > 3
console.log(4 > 3);
// 4 >= 3
console.log(4 >= 3);
// 4 < 3
console.log(4 < 3);
// 4 <= 3
console.log(4 <= 3);
// 4 == 4
console.log(4 == 4);
// 4 === 4
console.log(4 === 4);
// 4 != 4
console.log(4 != 4);
// 4 !== 4
console.log(4 !== 4);
// 4 != '4'
console.log(4 !== "4");
// 4 == '4'
console.log(4 == "4");
// 4 === '4'
console.log(4 === "4");
// Find the length of python and jargon and make a falsy comparison statement.
console.log("python".length > "jargon".length);
//initiallizing date
let now = new Date();
// What is the year today?
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth() + 1);
// What is the date today?
let date = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
console.log(date.toString() + "/" + month.toString() + "/" + year.toString());
// What is the day today as a number?
console.log(date);
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
function secondsSince1970() {
  // Get the current date and time
  let currentDate = new Date();

  // Get the number of milliseconds since January 1, 1970
  let millisecondsSince1970 = currentDate.getTime();

  // Convert milliseconds to seconds
  let secondsSince1970 = millisecondsSince1970 / 1000;

  // Return the result
  return secondsSince1970;
}

// Example usage
let secondsElapsed = secondsSince1970();
console.log("Seconds elapsed since January 1, 1970:", secondsElapsed);
