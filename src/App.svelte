<script lang="ts">
  import Add from "./lib/Components/Add.svelte";
  import Filter from "./lib/Components/Filter.svelte";
  import List from "./lib/Components/List.svelte";
  import Stats from "./lib/Components/Stats.svelte";
  import Todo from "./lib/Todo.svelte";

  const _todo = Todo.instance();
</script>

<main class="container">
  <h1>Todo Svelte</h1>

  <Add />
  <Filter />
  <Stats />
  <hr />

  <List />
</main>

<style>
  main {
    margin-top: 4rem;
    max-width: 576px;
  }
</style>
