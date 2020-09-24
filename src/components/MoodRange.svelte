<script>
  import MoodStore from "../stores/MoodStore";
  import { createEventDispatcher } from "svelte";
  import Modal from "../shared/Modal.svelte";
  import moment from "moment";
  import FaRegAngry from "svelte-icons/fa/FaRegAngry.svelte";
  import IoMdHappy from "svelte-icons/io/IoMdHappy.svelte";
  import FaRegSadTear from "svelte-icons/fa/FaRegSadTear.svelte";
  import FaRegTired from "svelte-icons/fa/FaRegTired.svelte";

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

  ul {
    list-style: none;
    display: flex;
    margin: auto;
  }

  button {
    margin: 4px;
  }

  .icon {
    width: 32px;
    height: 32px;
  }
</style>

<Modal {showModal} on:click={toggleModal}>
  <h1>This is the modal!!</h1>
</Modal>

<fieldset>
  <legend>Range:</legend>

  <div class="low-end">
    <p>Ugh...</p>
  </div>

  <ul>
    <li>
      <button>
        <div class="icon">
          <FaRegSadTear />
        </div>
      </button>
    </li>
    <li>
      <button>
        <div class="icon">
          <FaRegAngry />
        </div>
      </button>
    </li>
    <li>
      <button>
        <div class="icon">
          <FaRegSadTear />
        </div>
      </button>
    </li>
    <li>
      <button>
        <div class="icon">
          <FaRegTired />
        </div>
      </button>
    </li>
    <li>
      <button><div class="icon">
          <IoMdHappy />
        </div></button>
    </li>
  </ul>
  <div class="high-end">
    <p>Great!!</p>
  </div>
</fieldset>
