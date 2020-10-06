<script>
  const registerUser = (e) => {
    e.preventDefault();
    console.log("hello");
  };

  const clearForm = (e) => {
    e.preventDefault();

    console.log("hello");
  };
</script>

<style>
  fieldset {
    width: 75%;
    margin: auto;
  }

  .input {
    width: 100%;
  }
</style>

<fieldset>
  <legend>
    <h1>Register Here:</h1>
  </legend>

  <form class="form" id="form">
    <input
      class="input"
      type="text"
      name="username"
      id="username"
      value="username"
      placeholder="Username" />
    <input
      class="input"
      type="text"
      name="password"
      id="password"
      value="password"
      placeholder="Password" />
    <input
      class="input"
      type="text"
      name="confirmPassword"
      id="confirmPassword"
      value="confirmPassword"
      placeholder="Confirm Password" />
    <button id="clear" class="clear" on:click={clearForm}>Clear</button>
    <button id="submit" class="submit" on:click={registerUser}>Submit</button>
  </form>
</fieldset>
