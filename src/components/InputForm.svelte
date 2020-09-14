<script>
  let moodChoices = ["1", "2", "3"];
  let selected;
  let todaysMood = "";

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(todaysMood);
  };
</script>

<form on:submit={handleSubmit}>
  <select value={selected} on:change={() => (todaysMood = '')}>
    {#each moodChoices as choice}
      <option value={choice}>{choice}</option>
    {/each}
  </select>
  <button type="submit">Submit</button>
</form>
