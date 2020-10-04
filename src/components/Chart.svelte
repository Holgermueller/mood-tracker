<script>
  import MoodStore from "../stores/MoodStore";
  import Pie from "svelte-chartjs/src/Pie.svelte";

  const moods = $MoodStore.map((mood) => mood.mood);

  const timesFelt = $MoodStore.map((mood) => mood.timesFelt);
  const moodColors = $MoodStore.map((mood) => mood.color);

  let data = {
    labels: moods,
    datasets: [
      {
        label: "Moods: ",
        backgroundColor: moodColors,
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
