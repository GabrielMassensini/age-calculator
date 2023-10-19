const CURRENT_DATE = new Date();
const CURRENT_YEAR = CURRENT_DATE.getFullYear();
const CURRENT_MONTH = CURRENT_DATE.getMonth() + 1;
const CURRENT_DAY = CURRENT_DATE.getDate();

const YEAR_OF_BIRTH = document.getElementById("year").value;
const MONTH_OF_BIRTH = document.getElementById("month").value;
const DAY_OF_BIRTH = document.getElementById("day").value;

const YEARS_OF_LIVE = CURRENT_YEAR - YEAR_OF_BIRTH;
const MONTHS_OF_LIVE = CURRENT_MONTH - MONTH_OF_BIRTH;
const DAYS_OF_LIVE = CURRENT_DAY - DAY_OF_BIRTH - 1;

const YEARS_RESULT = document.getElementById("year-result");
const MONTH_RESULT = document.getElementById("month-result");
const DAY_RESULT = document.getElementById("day-result");

const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  
  YEARS_RESULT.innerHTML = YEARS_OF_LIVE;
  MONTH_RESULT.innerHTML = MONTHS_OF_LIVE;
  DAY_RESULT.innerHTML = DAYS_OF_LIVE;
});
