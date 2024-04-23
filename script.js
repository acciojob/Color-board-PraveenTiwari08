document.addEventListener("DOMContentLoaded", function() {
  const board = document.getElementById("board");
  const colors = ["red", "blue", "green", "yellow", "orange", "purple", "cyan", "magenta"];

  // Create 800 boxes
  for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("square");
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    board.appendChild(box);

    // Add event listener to each box
    box.addEventListener("mouseover", function() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.style.backgroundColor = randomColor;
      setTimeout(() => {
        this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      }, 1000);
    });
  }
});
