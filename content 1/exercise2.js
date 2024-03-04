// Exercise: Level 2
// 1 Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(
  "there is no exercise better for the hear than reaching down and lifting people up"
);
// 2 Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
let motherTeresa =
  "loye is not patronizing and charity isn'tabout love. charity and love are the same -- with charity you give love , so don't just give money but reach out your hands instead.";
console.log(motherTeresa);
// 3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof "10" == 10);
// 4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat("9.8") == 10);
// 5 Check if 'on' is found in both python and jargon
console.log("python".includes("on"));
console.log("jargon".includes("on"));
// 6 I hope this course is not full of jargon. Check if jargon is in the sentence.
let hope = "i hopr this course is not full of jargon ";
console.log(hope.includes("jargon"));
// 7 Generate a random number between 0 and 100 inclusively.
let random = Math.random();
console.log(random * 100);
// 8 Generate a random number between 50 and 100 inclusively.
let floorRandom = Math.floor(Math.random() * (100 - 50 + 1) + 50);
console.log(floorRandom);
// 9 Generate a random number between 0 and 255 inclusively.
console.log(Math.random() * (255 + 1));
// 10 Access the 'JavaScript' string characters using a random number.
let js = "javascript";
let getLetter = Math.floor(Math.random() * js.length);
console.log(js[getLetter]);
// 11 Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
let numberS =
  " 1 1 1 1 \n 2 1 3 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125";
console.log(numberS);
// 12 Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let because =
  "you cannot end a sentence with because because because is a conjunction";
console.log(because.substring(31, 55));
