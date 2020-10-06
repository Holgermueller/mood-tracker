<script>
  const loginUser = (e) => {
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
    <h1>Login Here:</h1>
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
    <button on:click={clearForm}>Clear</button>
    <button on:click={loginUser}>Submit</button>
  </form>
</fieldset>
