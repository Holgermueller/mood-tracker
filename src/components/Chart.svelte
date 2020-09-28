<script>
  import MoodStore from "../stores/MoodStore";
</script>

<div>
  <h2>A chart will appear here.</h2>
  {#each $MoodStore as mood}
    <h5>{mood.mood}</h5>
    <h6>{mood.date}</h6>
  {/each}
</div>
