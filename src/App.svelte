<script>
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Home from "./routes/Home.svelte";
  import Dashboard from "./routes/Dashboard.svelte";

  export let url = "";
</script>

<Header />

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="dashboard">Dash</Link>
  </nav>
  <div>
    <Route path="dashboard" component={Dashboard} />
    <Route path="/">
      <Home />
    </Route>
  </div>
</Router>

<Footer />
