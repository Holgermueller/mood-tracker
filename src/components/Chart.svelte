<script>
  import MoodStore from "../stores/MoodStore";
  import Chart from "chart.js";

  $: instancesTracked = $MoodStore.reduce(
    (a, { timesFelt }) => a + timesFelt,
    0
  );

  $: MoodNames = $MoodStore.Map((mood) => mood.mood);

  $: TimesFelt = $MoodStore.Map((mood) => mood.timesFelt);

  let ctx = document.getElementById("PieChart");

  const PieChart = new Chart(ctx, {
    type: "pie",
    cutoutPercentage: 0,
    labels: [$MoodNames],
    data: [$instancesTracked],
  });
</script>

<div>
  <h2>A chart will appear here.</h2>

  <div id="PieChart" />
  {#each $MoodStore as mood}
    <h5>{mood.mood}</h5>
    <h6>{mood.timesFelt}</h6>
  {/each}
</div>
