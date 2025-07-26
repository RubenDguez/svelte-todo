<script lang="ts">
  import Todo from "../Todo.svelte";
  const _todo = Todo.instance();

  let filter = $state<TFilter>("All");

  const handleChange = () => {
    _todo.filter = filter;
  };
</script>

<form>
    <p>Filters</p>
    <select name="filter" bind:value={filter} onchange={handleChange} required>
      <option>All</option>
      <option>Completed</option>
      <option>Pending</option>
    </select>
</form>
