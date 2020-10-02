<script>
  import MoodStore from "../stores/MoodStore";
  import Pie from "svelte-chartjs/src/Pie.svelte";

  const moods = $MoodStore.map((mood) => mood.mood);

  const timesFelt = $MoodStore.map((mood) => mood.timesFelt);

  let data = {
    labels: moods,
    datasets: [
      {
        label: "Moods: ",
        backgroundColor: [
          "red",
          "#0066ff",
          "#00ffff",
          "#33cc33",
          "#000066",
          "#ff9900",
        ],
        data: timesFelt,
      },
    ],
  };

  let options = {
    title: {
      display: true,
      text: "Moods",
    },
    responsive: true,
  };
</script>

<div>
  <Pie {data} {options} />
</div>
