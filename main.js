const CURRENT_DATE = new Date();
const CURRENT_YEAR = CURRENT_DATE.getFullYear();
const CURRENT_MOUNTH = CURRENT_DATE.getMonth() + 1;
const CURRENT_DAY = CURRENT_DATE.getDate();

const YEAR_OF_BIRTH = document.getElementById("year").value;
const MOUNTH_OF_BIRTH = document.getElementById("month").value;
const DAY_OF_BIRTH = document.getElementById("day").value;

const YEARS_OF_LIVE = CURRENT_YEAR - YEAR_OF_BIRTH;
const MOUNTHS_OF_LIVE = CURRENT_MOUNTH - MOUNTH_OF_BIRTH;
const DAYS_OF_LIVE = CURRENT_DAY - DAY_OF_BIRTH - 1;


