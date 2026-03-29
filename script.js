function generateInputs() {
  const count = Number(document.getElementById("courseCount").value);
  const container = document.getElementById("inputs");

  container.innerHTML = ""; // clear old inputs

  for (let i = 0; i < count; i++) {
    container.innerHTML += `
      <input type="number" placeholder="Course ${i + 1} mark" class="marks"><br>
    `;
  }
}
function getGPA(mark) {
  if (mark >= 90) return 4.0;
  if (mark >= 80) return 3.7;
  if (mark >= 70) return 3.0;
  if (mark >= 60) return 2.0;
  if (mark >= 50) return 1.0;
  return 0;
}


function calculate() {
  const inputs = document.querySelectorAll(".marks");

  let total = 0;
  let totalGPA = 0;
  let count = inputs.length;

  inputs.forEach(input => {
    const val = Number(input.value);

    if (!isNaN(val)) {
      total += val;
      totalGPA += getGPA(val);
    }
  });

  const avg = total / count;
  const gpa = totalGPA / count;

  document.getElementById("result").textContent =
    `Average: ${avg.toFixed(2)} | GPA: ${gpa.toFixed(2)} / 4.0`;
}





