<script>
  import TodaysDate from "../components/TodaysDate.svelte";
  import MoodRange from "../components/MoodRange.svelte";
  import InstancesTracked from "../components/InstancesTracked.svelte";
  import Chart from "../components/Chart.svelte";
  import Graphs from "../components/Graphs.svelte";
  import Resources from "../components/Resources.svelte";
  import Tabs from "../shared/Tabs.svelte";

  let items = ["Graphs", "Chart", "Resources"];
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

<main>
  <TodaysDate />
  <MoodRange />
  <InstancesTracked />

  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === 'Graphs'}
    <Graphs />
  {:else if activeItem === 'Chart'}
    <Chart on:add={handleAdd} />
  {:else if activeItem === 'Resources'}
    <Resources />
  {/if}
</main>
