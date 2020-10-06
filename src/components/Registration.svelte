<script>
  let username = "";
  let password = "";
  let confirmPassword = "";

  const registerUser = (e) => {
    e.preventDefault();

    let user = {
      username,
      password,
      confirmPassword,
    };

    console.log(user);
  };

  const clearForm = (e) => {
    e.preventDefault();

    let user = {
      username: "",
      password: "",
      confirmPassword: "",
    };
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
      bind:value={username}
      placeholder="Username" />
    <input
      class="input"
      type="text"
      name="password"
      id="password"
      bind:value={password}
      placeholder="Password" />
    <input
      class="input"
      type="text"
      name="confirmPassword"
      id="confirmPassword"
      bind:value={confirmPassword}
      placeholder="Confirm Password" />
    <button id="clear" class="clear" on:click={clearForm}>Clear</button>
    <button id="submit" class="submit" on:click={registerUser}>Submit</button>
  </form>
</fieldset>
