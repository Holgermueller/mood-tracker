<script>
  import MoodStore from "../stores/MoodStore";
  import Pie from "svelte-chartjs/src/Pie.svelte";

  console.log($MoodStore);

  const moodData = {};

  let data = {
    labels: ["mood1", "mood2", "mood3", "mood4", "mood5", "mood6"],
    datasets: [
      {
        label: "Mood",
        backgroundColor: [
          "red",
          "#0066ff",
          "#00ffff",
          "#33cc33",
          "#000066",
          "#ff9900",
        ],
        data: [12, 19, 3, 5, 2, 3],
      },
    ],
  };

  let options = {
    responsive: true,
  };
</script>

<div>
  <Pie {data} {options} />
</div>
