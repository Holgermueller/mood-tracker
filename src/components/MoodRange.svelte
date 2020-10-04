<script>
  import MoodStore from "../stores/MoodStore";
  import { createEventDispatcher } from "svelte";
  import moment from "moment";

  const addTodaysMood = (e) => {
    MoodStore.update((moods) => {
      let moodsToUpdate = [...moods];

      let updatedMood = moodsToUpdate.find((mood) => mood.id == e.target.id);

      if (e.target.id === e.target.value) {
        updatedMood.timesFelt++;
      }

      return moodsToUpdate;
    });
  };
</script>

<style>
  fieldset {
    width: 55%;
    margin: 8px auto;
    border-radius: 15px;
  }

  button {
    margin: 4px;
    color: whitesmoke;
    border-radius: 7px;
    width: 100%;
  }
</style>

<fieldset>
  <legend>Range:</legend>

  {#each $MoodStore as mood}
    <button
      on:click={addTodaysMood}
      class="button"
      style="background-color:{mood.color}"
      id={mood.id}
      value={mood.id}>
      {mood.mood}
    </button>
  {/each}
</fieldset>
