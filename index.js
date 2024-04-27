const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");

let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

let dateComponents = formattedDate.split(", ");
let day = dateComponents[0];
let date = dateComponents[1] + " " + dateComponents[2];

dateEl.textContent = date;
dayEl.textContent = day;


