const setDate = () => {
  const now = new Date();

  // set the second hand
  const secondHand = document.querySelector('.second-hand');
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // set the min hand
  const minuteHand = document.querySelector('.min-hand');
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // set the hour hand
  const hourHand = document.querySelector('.hour-hand');
  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

// every second we call setDate function

setInterval(setDate, 1000);

setDate();
