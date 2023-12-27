// Function to calculate age
const calculateAge = () => {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;

  // Check for empty fields
  if (!day || !month || !year) {
    document.getElementById("error-message").textContent =
      "Please enter all date components!";
    return; // Stop calculation
  } else {
    document.getElementById("error-message").textContent = ""; // Clear error message if fields are filled
  }

  // Check for day > 7
  if (day > 31) {
    document.getElementById("error-message").textContent =
      "There are only 7 days in a week!";
    return; // Stop calculation
  }

  if (month > 12) {
    document.getElementById("error-message").textContent =
      "There are only 12 moonths in a year!";
    return; // Stop calculation
  }

  // Calculate age
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  const age = today.getFullYear() - birthDate.getFullYear();
  console.log(birthDate);
  const months = today.getMonth() - birthDate.getMonth();
  const days = today.getDate() - birthDate.getDate();

  // Display age
  document.getElementById("years").textContent = ` ${age} : Years`;
  document.getElementById("months").textContent = `Months: ${months}`;
  document.getElementById("days").textContent = `Days: ${days}`;

  // Error handling for invalid age
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";

  if (year > today.getFullYear()) {
    errorMessage.textContent = "Incorrect year of birth inputted";
    document.getElementById("years").textContent = "";
    document.getElementById("months").textContent = "";
    document.getElementById("days").textContent = "";
  }

  if (
    isNaN(day) ||
    isNaN(month) ||
    isNaN(year) ||
    day <= 0 ||
    month <= 0 ||
    year <= 0
  ) {
    errorMessage.textContent = "Invalid date components!";
  } else if (isNaN(age) || isNaN(months) || isNaN(days) || age < 0) {
    errorMessage.textContent = "Invalid date of birth!";
    document.getElementById("years").textContent = "";
    document.getElementById("months").textContent = "";
    document.getElementById("days").textContent = "";
  }
};
