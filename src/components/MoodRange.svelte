<script>
  import MoodStore from "../stores/MoodStore";
  import { createEventDispatcher } from "svelte";
  import Modal from "../shared/Modal.svelte";
  import moment from "moment";

  let showModal = false;

  let toggleModal = (e) => {
    showModal = !showModal;
    console.log(e.target.value);
  };

  const addTodaysMood = (e) => {
    console.log(e.target.value);

    let incrementTimesFelt = {
      moodId: e.target.id,
      timesFelt: +1,
    };

    MoodStore.update((MoodStore) => {
      return timesFelt + 1;
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
  }
</style>

<Modal {showModal} on:click={toggleModal}>
  <h1>This is the modal!!</h1>
</Modal>

<fieldset>
  <legend>Range:</legend>

  {#each $MoodStore as mood}
    <button
      on:click={addTodaysMood}
      class="button"
      id={mood.mood}
      value={mood.mood}>
      {mood.mood}
    </button>
  {/each}
</fieldset>
