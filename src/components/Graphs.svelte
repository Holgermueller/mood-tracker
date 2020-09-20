<script>
  import MoodStore from "../stores/MoodStore";
</script>

<h1>How often you feel each mood.</h1>
<div>
  {#each $MoodStore as mood}
    <h5>{mood.mood}</h5>
    <h5>{mood.moodId}</h5>
  {/each}
</div>
