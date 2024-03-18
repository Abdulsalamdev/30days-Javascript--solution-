// Exercises: Level 2
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hour = now.getHours();

// 15 Create a human readable time format using the Date time object
// YYYY-MM-DD HH:mm
let format1 = year + "/" + month + "/" + date;
console.log(format1);
// DD-MM-YYYY HH:mm
let format2 = date + "-" + month + "-" + year;
console.log(format2);
// DD/MM/YYYY HH:mm
let format3 = date + "/" + month + "/" + year;
