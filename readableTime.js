// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
  const pad = (x) => {
    return x < 10 ? "0" + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(seconds % 60)
  );

  //   let timeLeft = seconds;
  //   let minutes;
  //   let hours;

  //   if (timeLeft / 3600 >= 1) {
  //     hours = Math.floor(timeLeft / 3600);
  //     hours < 10 ? (hours = `0${hours}`) : hours;
  //     timeLeft -= hours * 3600;
  //   } else {
  //     hours = "00";
  //   }

  //   if (timeLeft / 60 >= 1) {
  //     minutes = Math.floor(timeLeft / 60);
  //     minutes < 10 ? (minutes = `0${minutes}`) : minutes;
  //     timeLeft -= minutes * 60;
  //   } else {
  //     minutes = "00";
  //   }

  //   timeLeft < 10 ? (timeLeft = `0${timeLeft}`) : timeLeft;
  //   return `${hours}:${minutes}:${timeLeft}`;
}

humanReadable(0);
humanReadable(3600);
humanReadable(60);
humanReadable(86399);
humanReadable(359999);
