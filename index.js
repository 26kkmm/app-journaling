const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const calYear = document.querySelector(".cal-year");
const calMonth = document.querySelector(".cal-month");
const calDatesList = document.querySelector(".cal-dates");

const prevDay = document.querySelector("#previous-day");
const nextDay = document.querySelector("#next-day");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// today dates heading
dayEl.textContent = days[date.getDate()];
dateEl.innerHTML = `<p> ${year} ${months[month]} <span class="todayDate">${date.getDate()} </span> </p>`;

// calendar
calYear.textContent = year;
calMonth.textContent = months[month];

let currentDate = date.getDate();
let lastdate = new Date(year, month + 1, 0).getDate();
let dayOne = new Date(year, month, 1).getDay();
let dayEnd = new Date(year, month, lastdate).getDay();
let monthlastdate = new Date(year, month, 0).getDate();

let generatedDays = "";
for (let i = dayOne; i > 0; i--) {
  generatedDays += `<li class='inactive'>${monthlastdate - i + 1}</li>`;
}
for (let i = 1; i < lastdate; i++) {
  if (i === currentDate) {
    generatedDays += `<li class="isToday">${i}</li>`;
  } else {
    generatedDays += `<li>${i}</li>`;
  }
}
for (let i = 1; i < 8 - dayEnd; i++) {
  generatedDays += `<li class="inactive">${i}</li>`;
}

calDatesList.innerHTML = generatedDays;

// calendar buttons
const showToday = () => {
    const todayDate = document.querySelector(".isToday");
    const today = date.getDate()
    todayDate.classList.remove("isToday");
    for (const date of calDatesList.childNodes) {
      if (date.textContent == today) {
        date.classList.add('isToday')
      }
    }
}

const showPreviousDay = () => {
  // change date in calendar
  const todayDate = document.querySelector(".isToday");
  todayDate.classList.remove("isToday");
  todayDate.previousElementSibling.classList.add("isToday");
  // show notes on that day
};

const showNextDay = () => {
  const todayDate = document.querySelector(".isToday");
  todayDate.classList.remove("isToday");
  todayDate.nextElementSibling.classList.add("isToday");
};
prevDay.addEventListener("click", showPreviousDay);
nextDay.addEventListener("click", showNextDay);
const todayDateEl = document.querySelector(".todayDate");
todayDateEl.addEventListener('click', showToday)

// cal year and month choosing
const showAllYears = () => {
  calYear.textContent = '2002'
}

calYear.addEventListener('click', showAllYears)

