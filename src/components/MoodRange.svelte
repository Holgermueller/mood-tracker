<script>
  import MoodStore from "../stores/MoodStore";
  import { createEventDispatcher } from "svelte";
  import Modal from "../shared/Modal.svelte";
  import moment from "moment";

  let showModal = false;

  let moodRange = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  let selected;

  let todaysMood = "";

  let todaysDate = moment().format("hh:mm A, Do MMM YYYY");

  let toggleModal = (e) => {
    showModal = !showModal;
    console.log(e.target.value);
  };

  const addTodaysMood = (e) => {
    console.log(e.target.value);

    let todaysMood = {
      date: todaysDate,
      mood: e.target.value,
      id: Math.random(),
      moodId: e.target.id,
    };

    MoodStore.update((MoodStore) => {
      return [todaysMood, ...MoodStore];
    });
  };
</script>

<style>
  fieldset {
    width: 55%;
    margin: 8px auto;
    border-radius: 15px;
  }

  .low-end {
    float: left;
  }

  .high-end {
    float: right;
  }

  .button {
    margin: 4px;
  }
</style>

<Modal {showModal} on:click={toggleModal}>
  <h1>This is the modal!!</h1>
</Modal>

<fieldset>
  <legend>Range:</legend>

  <p class="low-end">Ugh...</p>

  {#each moodRange as mood}
    <button
      on:click={addTodaysMood}
      id={mood}
      value={mood}
      class="button">{mood}</button>
  {/each}

  <p class="high-end">Great!!</p>
</fieldset>
