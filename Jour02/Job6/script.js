const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const total = sequence.length;
let position = 0;

addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  const expected = sequence[position].toLowerCase();

  if (key === expected) {
    position++;

    if (position === total) {
      document.body.classList.add("konami");
      const messageEl = document.getElementById("message");
      if (messageEl) {
        messageEl.textContent = "Bravo ! Code Konami réussi.";
      }
      position = 0;
    }
    return;
  }

  position = key === sequence[0].toLowerCase() ? 1 : 0;
});
