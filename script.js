// Set the date of your countdown
const tripDate = new Date("October 16, 2025 14:00:00 GMT-0500").getTime();

// Update the countdown every second
const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = tripDate - now;

  // Calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Precious Baby Hagans Arrival Date Has Arrived!";
  }
}, 1000);

