<script>
  let username = "";
  let password = "";
  let confirmPassword = "";
  let error = "";

  const registerUser = () => {
    let user = {
      username,
      password,
      confirmPassword,
    };

    console.log(user);
  };

  const confirmPasswordsMatch = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      error = "Passwords do not match!";
    } else {
      registerUser();
    }
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

  .error {
    color: red;
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

    {#if error}
      <p class="error">{error}</p>
    {/if}

    <button id="clear" class="clear" on:click={clearForm}>Clear</button>
    <button
      id="submit"
      class="submit"
      on:click={confirmPasswordsMatch}>Submit</button>
  </form>
</fieldset>
