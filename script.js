// Function to calculate ASCII sum of a string
function pwrAlgo(name, age) {
  // Initialize sum to store ASCII values
  let asciiSum = 0;

  // Loop through each character in the name
  for (let i = 0; i < name.length; i++) {
    // Add ASCII value of each character to sum
    asciiSum += name.charCodeAt(i);
  }

  // Round ASCII sum divided by age, square and return
  return Math.round(Math.pow(asciiSum / age, 2));
}

// Function to handle the calculation and display
function calculatePower() {
  // Get input values
  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);

  // Input validation
  if (!name || !age || age < 1) {
    alert("Please enter valid name and age!");
    return;
  }

  // Calculate power level using pwrAlgo
  const powerLevel = pwrAlgo(name, age);

  // Display result
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
        <h2 class="article-heading" >Results:</h2>
        <p>Alias: ${name}</p>
        <p>Years on Midgard: ${age}</p>
        <p>Power Level: ${powerLevel}💥</p>
    `;
}

// Get current year for footer
document.getElementById("currentYear").textContent = new Date().getFullYear();
