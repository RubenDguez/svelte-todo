<script lang="ts">
  import Todo from "../Todo.svelte";
  const _todo = Todo.instance();

  const handleDone = (id: string) => {
    const todo = _todo.getById(id);
    _todo.toggleDone(todo.id);
  };
</script>

<article>
  <fieldset>
    {#each _todo.filtered() as todo (todo.id)}
      <label class:scratch={todo.done}>
        <input
          type="checkbox"
          name={todo.title}
          checked={todo.done}
          onclick={() => handleDone(todo.id)}
        />
        {todo.title}
      </label>
    {/each}
  </fieldset>
</article>

<style>
  .scratch {
    text-decoration: line-through;
  }
</style>
