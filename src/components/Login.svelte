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

    console.log(user);
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

  .error {
    color: red;
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

    <button on:click={clearForm}>Clear</button>
    <button on:click={validateForm}>Submit</button>
  </form>
</fieldset>
