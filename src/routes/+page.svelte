<script>
  const generateBingoGrid = () => {
    const grid = [];
    for (let i = 0; i < 5; i++) {
      const row = [];
      for (let j = 0; j < 5; j++) {
        row.push(Math.floor(Math.random() * 100) + 1);
      }
      grid.push(row);
    }
    return grid;
  };

  const bingoGrid = generateBingoGrid();
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
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
  }
</style>

<div class="bingo-container">
  <div class="bingo-grid">
    {#each bingoGrid as row}
      {#each row as cell}
        <div class="bingo-cell">{cell}</div>
      {/each}
    {/each}
  </div>
</div>
