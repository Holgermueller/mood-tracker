<script>
  let moodChoices = ["1", "2", "3"];
  let selected;
  let todaysMood = "";

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(todaysMood);
  };
</script>

<style>
  input {
    display: block;
  }
</style>

<select bind:value={todaysMood}>
  {#each moodChoices as moodChoice}
    <option value={moodChoice}>{moodChoice}</option>
  {/each}
</select>

<button on:click={handleSubmit}>Submit</button>

<h4>Mood selected: {todaysMood}</h4>
