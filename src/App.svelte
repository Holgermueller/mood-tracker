<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import InputForm from "./components/InputForm.svelte";
  import TodaysDate from "./components/TodaysDate.svelte";
  import Range from "./components/Range.svelte";
  import Chart from "./components/Chart.svelte";
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
  <Range />
  <InputForm />
  <Chart />
</main>

<Footer />
