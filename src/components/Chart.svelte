<script>
  import MoodStore from "../stores/MoodStore";

  let moods = [];

  MoodStore.subscribe((data) => {
    moods = data;
  });
</script>

<div>
  {#each moods as mood}
    <h5>{mood.mood}</h5>
    <h6>{mood.date}</h6>
  {/each}
</div>
