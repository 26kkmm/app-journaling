const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");
const calYear = document.querySelector(".cal-year");
const calMonth = document.querySelector(".cal-month");
const calDatesList = document.querySelector(".cal-dates");

const prevDay = document.querySelector("#previous-day");
const nextDay = document.querySelector("#next-day");

const textArea = document.querySelector("textarea");

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
// for notes saving loading

// today dates heading
dayEl.textContent = days[date.getDate()];
dateEl.innerHTML = `<p> ${year} ${
  months[month]
} <span class="todayDate">${date.getDate()} </span> </p>`;

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
    generatedDays += `<li class="active isToday">${i}</li>`;
  } else {
    generatedDays += `<li>${i}</li>`;
  }
}
for (let i = 1; i < 8 - dayEnd; i++) {
  generatedDays += `<li class="inactive">${i}</li>`;
}


calDatesList.innerHTML = generatedDays;

// calendar-dates show notes
const showNotesOfTheDay = (e) => {
  const date = e.target
  if(date.tagName === 'LI') {
    document.querySelector(".active").classList.remove('active')
    date.classList.add("active");
    loadNotes()
  }
}

calDatesList.addEventListener('click', showNotesOfTheDay)


// calendar buttons
const showToday = () => {
  const todayDate = document.querySelector(".active");
  const today = date.getDate();
  todayDate.classList.remove("active");
  for (const date of calDatesList.childNodes) {
    if (date.textContent == today) {
      date.classList.add("active");
    }
  }
  loadNotes()
};

const showPreviousDay = () => {
  // change date in calendar
  const todayDate = document.querySelector(".active");
  todayDate.classList.remove("active");
  todayDate.previousElementSibling.classList.add("active");
  loadNotes();
};

const showNextDay = () => {
  const todayDate = document.querySelector(".active");
  todayDate.classList.remove("active");
  todayDate.nextElementSibling.classList.add("active");
  loadNotes();
};
prevDay.addEventListener("click", showPreviousDay);
nextDay.addEventListener("click", showNextDay);
const todayDateEl = document.querySelector(".todayDate");
todayDateEl.addEventListener("click", showToday);



// notes

// load notes
const loadNotes = () => {
  const thisDate = document.querySelector(".active");
  const thisDay = `${calYear.textContent}-${calMonth.textContent}-${thisDate.textContent}`;
  console.log(thisDay);
  const notes = localStorage.getItem(thisDay);
  console.log(notes);
  if (notes) {
    textArea.value = JSON.parse(notes);
    console.log(notes);
  } else {
    textArea.value = ""
  }
};
loadNotes();

// saving notes
const autoSave = () => {
  const todayDate = document.querySelector(".active");
  const thisDay = `${calYear.textContent}-${calMonth.textContent}-${todayDate.textContent}`;
  localStorage.setItem(thisDay, JSON.stringify(textArea.value));
};

textArea.addEventListener("input", autoSave);
document.body.addEventListener("click", function (event) {
  textArea.focus();
});


document.addEventListener('DOMContentLoaded', () => {
  populateYearDropdown();
  populateMonthDropdown();
});

function toggleYearDropdown() {
  const yearDropdown = document.getElementById('year-dropdown');
  yearDropdown.style.display = yearDropdown.style.display === 'none' ? 'block' : 'none';
}

function toggleMonthDropdown() {
  const monthDropdown = document.getElementById('month-dropdown');
  monthDropdown.style.display = monthDropdown.style.display === 'none' ? 'block' : 'none';
}

function populateYearDropdown() {
  const yearDropdown = document.getElementById('year-dropdown');
  const currentYear = new Date().getFullYear();
  for (let year = 2020; year <= currentYear + 5; year++) {
    const yearDiv = document.createElement('div');
    yearDiv.textContent = year;
    yearDiv.onclick = () => {
      document.querySelector('.cal-year').textContent = year;
      yearDropdown.style.display = 'none';
    };
    yearDropdown.appendChild(yearDiv);
  }
}

function populateMonthDropdown() {
  const monthDropdown = document.getElementById('month-dropdown');
  months.forEach((month, index) => {
    const monthDiv = document.createElement('div');
    monthDiv.textContent = month;
    monthDiv.onclick = () => {
      document.querySelector('.cal-month').textContent = month;
      monthDropdown.style.display = 'none';
    };
    monthDropdown.appendChild(monthDiv);
  });
}

document.addEventListener('click', (event) => {
  const yearDropdown = document.getElementById('year-dropdown');
  const monthDropdown = document.getElementById('month-dropdown');
  if (!event.target.closest('.cal-year') && !event.target.closest('#year-dropdown')) {
    yearDropdown.style.display = 'none';
  }
  if (!event.target.closest('.cal-month') && !event.target.closest('#month-dropdown')) {
    monthDropdown.style.display = 'none';
  }
});
