<script>
  import MoodStore from "../stores/MoodStore";

  $: instancesTracked = $MoodStore.reduce(
    (a, { timesFelt }) => a + timesFelt,
    0
  );
</script>

<style>
  .graphs {
    width: 75%;
    margin: 0 auto;
  }
  .mood {
    background: #fafafa;
    margin: 10px auto;
    position: relative;
  }
  .single-mood {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  span {
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
  }
  .Bored {
    background: rgba(69, 196, 150, 0.2);
    border-left: 4px solid green;
  }
  .Happy {
    background: rgba(255, 215, 0, 0.2);
    border-left: 4px solid #ffd700;
  }
  .Sad {
    background: rgba(0, 0, 255, 0.2);
    border-left: 4px solid blue;
  }
  .Tired {
    background: rgba(153, 50, 204, 0.2);
    border-left: 4px solid #9932cc;
  }
  .Crazed {
    background: rgba(255, 165, 0, 0.2);
    border-left: 4px solid #ffa500;
  }

  .Angry {
    background: rgba(217, 27, 66, 0.2);
    border-left: 4px solid red;
  }
</style>

<div class="graphs">
  {#each $MoodStore as mood}
    <div class="mood">
      <div
        class="single-mood {mood.mood}"
        style="width: {Math.floor((100 / instancesTracked) * mood.timesFelt) || 0}%" />
      <span>{mood.mood} | Days felt: {mood.timesFelt}</span>
    </div>
  {/each}
</div>
