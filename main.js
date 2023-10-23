// Obtém a data atual
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

// Elementos do formulário
const yearOfBirth = document.getElementById("year");
const monthOfBirth = document.getElementById("months");
const dayOfBirth = document.getElementById("days");

// Elementos para exibir os resultados
const yourBirth = document.getElementById("your-birth");
const yourAge = document.getElementById("your-age");
const daysLived = document.getElementById("days-lived");
const hoursLived = document.getElementById("hours-lived");
const minutesLived = document.getElementById("minutes-lived");
const millisecondsLived = document.getElementById("milliseconds-lived");

// Botão e contêiner de resultados
const btn = document.getElementById("btn");
const resultContainer = document.getElementById("result-container");

// Função para verificar a entrada do ano
function inputYearCheck() {
  if (yearOfBirth.value !== "") {
    monthOfBirth.removeAttribute("disabled");
    dayOfBirth.removeAttribute("disabled");
  } else {
    monthOfBirth.setAttribute("disabled", "disabled");
    dayOfBirth.setAttribute("disabled", "disabled");
  }
}

// Função para preencher os dias com base no mês selecionado
function howManyDays() {
  const selectedMonth = monthOfBirth.value;

  let maxDays = 31;

  dayOfBirth.innerHTML = "";

  switch (selectedMonth) {
    case "April":
    case "June":
    case "September":
    case "November":
      maxDays = 30;
      break;
    case "February":
      maxDays =
        yearOfBirth.value % 4 === 0 &&
        (yearOfBirth.value % 100 !== 0 || yearOfBirth.value % 400 === 0)
          ? 29
          : 28;
      break;
  }

  for (let i = 1; i <= maxDays; i++) {
    const option = document.createElement("option");
    const day = i.toString().padStart(2, "0");
    option.value = day;
    option.text = day;
    dayOfBirth.appendChild(option);
  }
}

// Função para calcular e exibir os resultados
function calculated() {
  const birthDate = new Date(
    yearOfBirth.value,
    monthOfBirth.value - 1,
    dayOfBirth.value
  );

  const totalYears = currentYear - yearOfBirth.value;
  const totalMonths = currentMonth - monthOfBirth.value;
  const totalDays = currentDay - dayOfBirth.value;
  const totalDaysOfLife = Math.floor(
    (currentDate - birthDate) / (1000 * 60 * 60 * 24)
  );
  const totalHoursOfLife = Math.floor(
    (currentDate - birthDate) / (1000 * 60 * 60)
  );
  const totalMinutesOfLife = Math.floor(
    (currentDate - birthDate) / (1000 * 60)
  );
  const totalMillisecondsOfLife = Math.floor(currentDate - birthDate);

  yourBirth.innerHTML = `${monthOfBirth.value} / ${dayOfBirth.value} / ${yearOfBirth.value}`;
  yourAge.innerHTML = `${totalYears} years, ${totalMonths} months, and ${totalDays} days of life`;
  daysLived.innerHTML = `${totalDaysOfLife} days`;
  hoursLived.innerHTML = `${totalHoursOfLife} hours`;
  minutesLived.innerHTML = `${totalMinutesOfLife} minutes`;
  millisecondsLived.innerHTML = `${totalMillisecondsOfLife} milliseconds`;
}

// Adiciona um ouvinte de eventos para o botão
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (yearOfBirth.value !== "") {
    resultContainer.style.display = "block";
    calculated();
  } else {
    resultContainer.style.display = "none";
    alert("To calculate, fill in the data.");
  }
});
