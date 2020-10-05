<script>
  import Tabs from "../shared/Tabs.svelte";
  import Registration from "../components/Registration.svelte";
  import Login from "../components/Login.svelte";

  let items = ["Registration", "Login"];

  let activeItem = "Registration";
  const tabChange = (e) => (activeItem = e.detail);

  const handleAdd = () => {
    activeItem = "Login";
  };
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />

  {#if activeItem === 'Registration'}
    <Registration />
  {:else if activeItem === 'Login'}
    <Login />
  {/if}
</main>
