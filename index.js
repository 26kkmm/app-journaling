const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const calYear = document.querySelector(".cal-year");
const calMonth = document.querySelector(".cal-month");

let currentDate = new Date();
let formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

let dateComponents = formattedDate.split(", ");  // 'Sunday, April 28, 2024'
let day = dateComponents[0];
let date = dateComponents[1] + " " + dateComponents[2];
let month = dateComponents[1].split(" ")[0]
let year = dateComponents[2]

dateEl.textContent = date;
dayEl.textContent = day;

// calendar
calYear.textContent = year
calMonth.textContent = month



