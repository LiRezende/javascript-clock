const clock = document.querySelector(".clock");

const tick = () => {
  // Creates a new date object and selects the hours, minutes and seconds
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // HTML template to display the clock
  const html = `
    <span>${hours}</span> : 
    <span>${minutes}</span> : 
    <span>${seconds}</span>
  `;

  // Displays the clock on the page
  clock.innerHTML = html;
};

// Updates the clock every second
setInterval(tick, 1000);
