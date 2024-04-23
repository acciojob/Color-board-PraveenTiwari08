document.addEventListener("DOMContentLoaded", function() {
  const board = document.getElementById("board");

  // Create 800 boxes
  for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("square");
    board.appendChild(box);

    // Add event listener to each box
    box.addEventListener("mouseover", function() {
      // Generate a random color
      const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
      // Change background color
      this.style.backgroundColor = randomColor;
      // After 1 second, revert back to original color
      setTimeout(() => {
        this.style.backgroundColor = "initial";
      }, 1000);
    });
  }
});
