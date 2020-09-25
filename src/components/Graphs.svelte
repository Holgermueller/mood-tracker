<script>
  import MoodStore from "../stores/MoodStore";
</script>

<style>
  .mood {
    background: #fafafa;
    margin: 10px auto;
    position: relative;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 15px;
  }
</style>

<div>
  {#each $MoodStore as mood}
    <div class="mood">
      <span>{mood.mood} | Days felt: {mood.timesFelt} </span>
    </div>
  {/each}
</div>
