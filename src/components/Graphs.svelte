<script>
  import MoodStore from "../stores/MoodStore";

  $: daysTracked = $MoodStore.reduce((a, { timesFelt }) => a + timesFelt, 0);

  $: percentForWidth = $MoodStore.map((mood) => {
    return Math.floor((100 / daysTracked) * mood.timesFelt) || 0;
  });
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
  span {
    text-align: center;
    display: inline-block;
    padding: 10px 20px;
  }
  .Bored {
    background: rgba(69, 196, 150, 0.2);
    border-left: 4px solid green;
    border-radius: 15px;
  }
  .Happy {
    background: rgba(255, 215, 0, 0.2);
    border-left: 4px solid #ffd700;
    border-radius: 15px;
  }
  .Sad {
    background: rgba(0, 0, 255, 0.2);
    border-left: 4px solid blue;
    border-radius: 15px;
  }
  .Tired {
    background: rgba(153, 50, 204, 0.2);
    border-left: 4px solid #9932cc;
    border-radius: 15px;
  }
  .Crazed {
    background: rgba(255, 165, 0, 0.2);
    border-left: 4px solid #ffa500;
    border-radius: 15px;
  }

  .Angry {
    background: rgba(217, 27, 66, 0.2);
    border-left: 4px solid red;
    border-radius: 15px;
  }
</style>

<div class="graphs">
  {#each $MoodStore as mood}
    <div class="mood">
      <div class={mood.mood} style="width: {percentForWidth}%;">
        <span>{mood.mood} | Days felt: {mood.timesFelt} </span>
      </div>
    </div>
  {/each}
</div>
