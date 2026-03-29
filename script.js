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