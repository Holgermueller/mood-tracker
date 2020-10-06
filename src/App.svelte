<script>
  import { Router, Link, Route } from "svelte-routing";
  import Header from "./layout/Header.svelte";
  import Footer from "./layout/Footer.svelte";
  import Home from "./routes/Home.svelte";
  import Dashboard from "./routes/Dashboard.svelte";
  import About from "./routes/About.svelte";

  export let url = "";
</script>

<Header />

<Router {url}>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dash</Link>
    <Link to="/about">About</Link>
  </nav>
  <div>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/about" component={About} />

    <Route path="/">
      <Home />
    </Route>
  </div>
</Router>

<Footer />
