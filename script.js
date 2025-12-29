function showCurrentDate() {
  const today = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  document.getElementById("todayDate").innerText =
    "Today is: " + today.toLocaleDateString("en-US", options);
}


function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const result = document.getElementById("result");

  if (!dobInput) {
    result.innerHTML = "Please select your date of birth!";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date();

  if (dob > today) {
    result.innerHTML = "Date of birth cannot be in the future!";
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.innerHTML = `You are <strong>${years}</strong> years, <strong>${months}</strong> months, and <strong>${days}</strong> days old.`;
}


function toggleMode() {
  const body = document.body;
  const modeBtn = document.getElementById("modeToggle");

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeBtn.innerText = "Light Mode";
  } else {
    modeBtn.innerText = "Dark Mode";
  }
}

window.onload = showCurrentDate;
