<script>
  import Header from '../components/Header.svelte';
  import Main from '../components/Main.svelte';
  import TimeLine from '../components/TimeLine.svelte';
  import SiderBar from '../components/SiderBar.svelte';
</script>

<div class="App">
  <Header />
  <Main>
    <TimeLine />
    <SiderBar />
  </Main>
</div>

<style>
  :global(body) {
    background-color: #676778;
    color: white;
  }
</style>
