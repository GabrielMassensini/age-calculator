const CURRENT_DATE = new Date();
const CURRENT_YEAR = CURRENT_DATE.getFullYear();
const CURRENT_MONTH = CURRENT_DATE.getMonth() + 1;
const CURRENT_DAY = CURRENT_DATE.getDate();

const YEAR_OF_BIRTH = document.getElementById("year");
const MONTH_OF_BIRTH = document.getElementById("months");
const DAYS_OF_BIRTH = document.getElementById("days");

const YOUR_BIRTH = document.getElementById("your-birth");
const YOUR_AGE = document.getElementById("your-age");
const DAYS_LIVED = document.getElementById("days-lived");
const HOURS_LIVED = document.getElementById("hours-lived");
const MINUTES_LIVED = document.getElementById("minutes-lived");
const MILLISECONDS_LIVED = document.getElementById("milliseconds-lived");

const BTN = document.getElementById("btn");

function inputYearCheck() {
  if (YEAR_OF_BIRTH.value !== "") {
    MONTH_OF_BIRTH.removeAttribute("disabled");
    DAYS_OF_BIRTH.removeAttribute("disabled");
  } else {
    MONTH_OF_BIRTH.setAttribute("disabled", "disabled");
    DAYS_OF_BIRTH.setAttribute("disabled", "disabled");
  }
}

function howManyDays() {
  const SELECTED_MONTH = MONTH_OF_BIRTH.value;

  let maxDays = 31;

  DAYS_OF_BIRTH.innerHTML = "";

  switch (SELECTED_MONTH) {
    case "April":
    case "June":
    case "September":
    case "November":
      maxDays = 30;
      break;
    case "February":
      maxDays =
        YEAR_OF_BIRTH.value % 4 === 0 &&
        (YEAR_OF_BIRTH.value % 100 !== 0 || YEAR_OF_BIRTH.value % 400 === 0)
          ? 29
          : 28;
      break;
  }

  for (let i = 1; i <= maxDays; i++) {
    const OPTION = document.createElement("option");
    const day = i.toString().padStart(2, "0");
    OPTION.value = day;
    OPTION.text = day;
    DAYS_OF_BIRTH.appendChild(OPTION);
  }
}

function calculated() {
  const DATE = new Date(
    YEAR_OF_BIRTH.value,
    MONTH_OF_BIRTH.value - 1,
    DAYS_OF_BIRTH.value
  );

  const TOTAL_YEAR = CURRENT_YEAR - YEAR_OF_BIRTH.value;
  const TOTAL_MONTH = CURRENT_MONTH - MONTH_OF_BIRTH.value;
  const TOTAL_DAYS = CURRENT_DAY - DAYS_OF_BIRTH.value;
  const TOTAL_DAYS_OF_LIFE = Math.floor(
    (CURRENT_DATE - DATE) / (1000 * 60 * 60 * 24)
  );
  const TOTAL_HOURS_OF_LIFE = Math.floor(
    (CURRENT_DATE - DATE) / (1000 * 60 * 60)
  );
  const TOTAL_MINUTES_OF_LIFE = Math.floor((CURRENT_DATE - DATE) / (1000 * 60));
  const TOTAL_MILLISECONDS_OF_LIFE = Math.floor(CURRENT_DATE - DATE);

  YOUR_BIRTH.innerHTML = `${TOTAL_MONTH}/${TOTAL_DAYS}/${TOTAL_YEAR}`;
  YOUR_AGE.innerHTML = `${TOTAL_YEAR} years, ${TOTAL_MONTH} months and ${TOTAL_DAYS} days of life`;
  DAYS_LIVED.innerHTML = `${TOTAL_DAYS_OF_LIFE} days`;
  HOURS_LIVED.innerHTML = `${TOTAL_HOURS_OF_LIFE} hours`;
  MINUTES_LIVED.innerHTML = `${TOTAL_MINUTES_OF_LIFE} minutes`;
  MILLISECONDS_LIVED.innerHTML = `${TOTAL_MILLISECONDS_OF_LIFE} milliseconds`;
}

BTN.addEventListener("click", (e) => {
  e.preventDefault();
  calculated();
});
