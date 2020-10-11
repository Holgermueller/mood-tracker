<script>
  let username = "";
  let password = "";
  let error = "";

  const validateForm = (e) => {
    e.preventDefault();

    if (!username) {
      error = "You must provide a username.";
    } else if (!password) {
      error = "You must provide a password";
    } else {
      loginUser();
    }
  };

  const loginUser = () => {
    let user = {
      username,
      password,
    };

    error = "";

    clearForm();

    console.log(user);
  };

  const clearForm = (e) => {
    e.preventDefault();

    username = "";
    password = "";
  };
</script>

<style>
  fieldset {
    width: 75%;
    margin: auto;
    border-radius: 8px;
  }

  .input {
    width: 100%;
  }

  .error {
    color: red;
  }
  .clear {
    border-color: red;
    background-color: red;
    color: white;
    border-radius: 8px;
  }

  .submit {
    background-color: green;
    color: white;
    border-radius: 8px;
  }
  .submit:disabled {
    border-color: grey;
    background-color: grey;
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
      bind:value={username}
      placeholder="Username" />
    <input
      class="input"
      type="text"
      name="password"
      id="password"
      bind:value={password}
      placeholder="Password" />

    {#if error}
      <p class="error">{error}</p>
    {/if}

    <button id="clear" class="clear" on:click={clearForm}>Clear</button>
    <button
      id="submit"
      class="submit"
      on:click={validateForm}
      disabled={!username || !password}>Submit</button>
  </form>
</fieldset>
