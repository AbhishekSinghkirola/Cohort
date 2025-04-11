/* -------------------------- Toggle Bulb On or Off ------------------------- */
const bulb = document.querySelector("#bulb");
const bulbBtn = document.querySelector("#toggleButton");
const statusEl = document.querySelector("#status");

bulbBtn.addEventListener("click", () => {
  bulb.classList.toggle("off");

  const bulbOff = bulb.classList.contains("off");
  bulbBtn.innerText = bulbOff ? "Turn On" : "Turn Off";

  statusEl.innerText = bulbOff ? "Status: off" : "Status: on";
});
