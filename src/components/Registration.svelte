<script>
  import { User } from "../stores/UserStore";

  let username = "";
  let password = "";
  let confirmPassword = "";
  let error = "";
  let success = "";

  const registerUser = () => {
    let userData = {
      username,
      password,
      confirmPassword,
    };

    User.set(userData);

    error = "";
    success = "You are now registered!";

    return $User;
  };

  const checkUsername = () => {};

  const validateRegistrationForm = (e) => {
    if (!username) {
      error = "You must provide a username!";
    } else if (!password) {
      error = "You must provide a password!";
    } else if (!confirmPassword) {
      error = "You must confirm your password!";
    } else if (password !== confirmPassword) {
      error = "Passwords do not match!";
    } else {
      registerUser();
      clearForm();
    }
  };

  const clearForm = () => {
    username = "";
    password = "";
    confirmPassword = "";
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
  .success {
    color: green;
  }
  .clear {
    border-color: red;
    background-color: red;
    color: white;
    border-radius: 8px;
  }
  .submit {
    border-color: green;
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
    <h1>Register Here:</h1>
  </legend>

  <form
    class="form"
    id="form"
    on:submit|preventDefault={validateRegistrationForm}>
    <input
      hint="blah"
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

    {#if success}
      <p>Welcome {$User.username}!</p>
      <p class="success">{success}</p>
    {/if}

    <button id="clear" class="clear" on:click={clearForm}>Clear</button>
    <button
      id="submit"
      class="submit"
      disabled={!username || !password || !confirmPassword}>Submit</button>
  </form>
</fieldset>
