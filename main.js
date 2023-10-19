const CURRENT_DATE = new Date();
const CURRENT_YEAR = CURRENT_DATE.getFullYear();
const CURRENT_MONTH = CURRENT_DATE.getMonth() + 1;
const CURRENT_DAY = CURRENT_DATE.getDate();

const YEAR_OF_BIRTH = document.getElementById("year");
const MONTH_OF_BIRTH = document.getElementById("months");
const DAYS_OF_BIRTH = document.getElementById("days");

function inputYearCheck() {
  if (MONTH_OF_BIRTH.value !== "") {
    MONTH_OF_BIRTH.removeAttribute("disabled");
    DAYS_OF_BIRTH.removeAttribute("disabled");
  }
}

function howManyDays() {
  const SELECTED_MONTH = MONTH_OF_BIRTH.value;

  let maxDays = 31;

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
