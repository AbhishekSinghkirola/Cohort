/* ----------------------- Display Form Data Real Time ---------------------- */
const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

const displayPreview = (e, elementId) => {
  document.getElementById(elementId).innerText = e.target.value;
};

nameInput.addEventListener("input", (e) => displayPreview(e, "nameDisplay"));
jobInput.addEventListener("input", (e) => displayPreview(e, "jobDisplay"));
ageInput.addEventListener("input", (e) => displayPreview(e, "ageDisplay"));
bioInput.addEventListener("input", (e) => displayPreview(e, "bioDisplay"));
