//Check if the given string is a correct time representation of the 24-hour clock.

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.

function validTime(time) {
  let timeArr = time.split(':');
  return (parseInt(timeArr[0]) <= 23 && parseInt(timeArr[1]) <= 59)
}
