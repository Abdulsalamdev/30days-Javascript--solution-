// Exercises: Level 3
// 1 Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
function formatTime(date) {
  // Get hours and pad with leading zero if needed
  const hours = ("0" + date.getHours()).slice(-2);

  // Get minutes and pad with leading zero if needed
  const minutes = ("0" + date.getMinutes()).slice(-2);

  // Concatenate hours and minutes with a separator if desired
  const formattedTime = hours + ":" + minutes;

  return formattedTime;
}

// Example usage
const currentDate = new Date();
const formattedCurrentTime = formatTime(currentDate);
console.log(formattedCurrentTime);
