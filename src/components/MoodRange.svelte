<script>
  let moodRange = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  let selected;

  let todaysMood = "";

  const handleClick = (e) => {
    console.log(e.target.value);
  };
</script>

<style>
  fieldset {
    width: 55%;
    margin: 8px auto;
  }

  .button {
    margin: 4px;
  }
</style>

<fieldset>
  <legend>Range:</legend>

  {#each moodRange as mood}
    <button
      on:click={handleClick}
      id={mood}
      value={mood}
      class="button">{mood}</button>
  {/each}
</fieldset>
