const digitalClockEl = document.querySelector(".digital-clock");
const hourHandEl = document.querySelector(".hour");
const minuteHandEl = document.querySelector(".minute");
const secondHandEl = document.querySelector(".second");

const timer = () => {
  setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const currentTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    digitalClockEl.innerHTML = currentTime;

    hourHandEl.style.transform = `rotate(${Math.floor(hours / 2) * 30}deg)`;
    minuteHandEl.style.transform = `rotate(${minutes * 6}deg)`;
    secondHandEl.style.transform = `rotate(${seconds * 6}deg)`;
  }, 1000);
};

timer();
