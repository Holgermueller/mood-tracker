<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import TodaysDate from "./components/TodaysDate.svelte";
  import MoodRange from "./components/MoodRange.svelte";
  import Chart from "./components/Chart.svelte";
  import Graphs from "./components/Graphs.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let items = ["Graphs", "Chart"];
  let activeItem = "Graphs";
  const tabChange = (e) => (activeItem = e.detail);

  const handleAdd = () => {
    activeItem = "Chart";
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

<Header />
<main>
  <h3>How are you feeling today?</h3>
  <TodaysDate />
  <MoodRange />

  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Graphs'}
    <Graphs />
  {:else if activeItem === 'Chart'}
    <Chart on:add={handleAdd} />
  {/if}
</main>

<Footer />
