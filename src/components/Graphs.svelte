<script>
  import MoodStore from "../stores/MoodStore";
</script>

<style>
  .graphs {
    margin-bottom: 7px;
  }
  .mood {
    background: #fafafa;
    width: 75%;
    margin: 10px auto;
    position: relative;
    border-radius: 15px;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .Bored {
    background: rgba(69, 196, 150, 0.2);
    border-left: 4px solid green;
  }
  .Sad {
    background: rgba(0, 0, 255, 0.2);
    border-left: 4px solid blue;
  }

  .Angry {
    background: rgba(217, 27, 66, 0.2);
    border-left: 2px solid red;
  }
</style>

<div class="graphs">
  {#each $MoodStore as mood}
    <div class="mood {mood.mood}">
      <span>{mood.mood} | Days felt: {mood.timesFelt} </span>
    </div>
  {/each}
</div>
