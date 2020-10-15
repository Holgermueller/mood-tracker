<script>
  import { MoodStore } from "../stores/MoodStore";
  import Pie from "svelte-chartjs/src/Pie.svelte";

  const timesFelt = $MoodStore.map((mood) => mood.timesFelt);
  const moods = $MoodStore.map((mood) => mood.mood);
  const moodColors = $MoodStore.map((mood) => mood.color);
  const borderColors = $MoodStore.map((mood) => mood.borderColor);

  $: instancesTracked = $MoodStore.reduce(
    (a, { timesFelt }) => a + timesFelt,
    0
  );

  let data = {
    labels: moods,
    datasets: [
      {
        label: moods,
        backgroundColor: moodColors,
        borderColor: borderColors,
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
