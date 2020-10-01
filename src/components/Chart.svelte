<script>
  import MoodStore from "../stores/MoodStore";
  import Chart from "chart.js";

  console.log($MoodStore);

  let ctx = document.getElementById("PieChart");

  const moodData = {};

  const PieChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["mood1", "mood2", "mood3", "mood4", "mood5", "mood6"],
      datasets: [
        {
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: ["red", "blue", "aqua", "green", "black", "orange"],
        },
      ],
    },
  });
</script>

<div>
  <h2>A chart will appear here.</h2>

  <canvas id="PieChart" width="400" height="400" />
  {#each $MoodStore as mood}
    <h5>{mood.mood}</h5>
    <h6>{mood.timesFelt}</h6>
  {/each}
</div>
