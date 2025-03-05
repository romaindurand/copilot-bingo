<script>
  const generateBingoGrid = () => {
    const phrases = [
      "Hello world",
      "Svelte is awesome",
      "I love coding",
      "JavaScript is fun",
      "Frontend development",
      "Backend development",
      "Full stack developer",
      "Web development",
      "Open source",
      "Community driven",
      "Learning new things",
      "Building projects",
      "Sharing knowledge",
      "Helping others",
      "Continuous improvement",
      "Staying motivated",
      "Overcoming challenges",
      "Achieving goals",
      "Collaborating with others",
      "Making a difference",
      "Innovative solutions",
      "Creative thinking",
      "Problem solving",
      "User experience",
      "Responsive design"
    ];

    const grid = [];
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 5; j++) {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        row.push(phrases[randomIndex]);
        phrases.splice(randomIndex, 1);
      }
      grid.push(row);
    }
    return grid;
  };

  const bingoGrid = generateBingoGrid();

  const handleCellClick = (event) => {
    const cell = event.target;
    const textarea = document.createElement("textarea");
    textarea.value = cell.textContent;
    textarea.style.width = "100%";
    textarea.style.height = "100%";
    textarea.addEventListener("blur", () => {
      cell.textContent = textarea.value;
      cell.removeChild(textarea);
    });
    cell.textContent = "";
    cell.appendChild(textarea);
    textarea.focus();
  };
</script>

<style>
  .bingo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .bingo-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }

  .bingo-cell {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
    padding: 10px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
  }
</style>

<div class="bingo-container">
  <div class="bingo-grid">
    {#each bingoGrid as row}
      {#each row as cell}
        <div class="bingo-cell" on:click={handleCellClick}>{cell}</div>
      {/each}
    {/each}
  </div>
</div>
