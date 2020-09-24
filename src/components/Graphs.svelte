<script>
  import MoodStore from "../stores/MoodStore";

  $: daysTracked = $MoodStore.map((mood) => {
    return mood.timesFelt;
  });
</script>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
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

<h3>How often you feel each mood.</h3>

<p>Total days tracked: {daysTracked}</p>
<div>
  {#each $MoodStore as mood}
    <div class="mood">
      <span>{mood.mood} | Days felt: {mood.timesFelt} </span>
    </div>
  {/each}
</div>
