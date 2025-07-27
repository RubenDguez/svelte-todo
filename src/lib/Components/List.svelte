<script lang="ts">
  import Todo from "../Todo.svelte";
  const _todo = Todo.instance();

  let error = $state("");

  const handleDone = (id: string) => {
    _todo.toggleDone(id);
  };

  const handleDelete = (id: string) => {
    const todo = _todo.getById(id);

    if (!todo.done) {
      error = "You can only delete completed tasks.";
      return;
    }

    _todo.remove(id);
    error = "";
  };
</script>

<article>
  {#if error}
    <header>
      <small class="error">{error}</small>
      <button class="x-button" onclick={() => {error = "";}}><small>❌</small></button>
    </header>
  {/if}
  <fieldset>
    {#each _todo.filtered() as todo (todo.id)}
      <div class="wrapper">
        <label class:scratch={todo.done} class="strech">
          <input
            type="checkbox"
            name={todo.title}
            checked={todo.done}
            onclick={() => handleDone(todo.id)}
          />
          {todo.title}
        </label>
        <button
          class="small-button"
          onclick={() => handleDelete(todo.id)}
          disabled={!todo.done}>Delete</button
        >
      </div>
    {/each}
  </fieldset>
</article>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .error {
    color: tomato;
    font-size: 0.65rem;
  }

  .scratch {
    text-decoration: line-through;
  }

  .small-button {
    padding: 0.05rem 0.5rem;
    background-color: tomato;
    border: none;
  }

  .x-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 0.75rem;
    background-color: tomato;
    border: none;
    width: 16px;
    height: 16px;
    scale: 0.75;

    transition: all 0.5s;
  }

  .x-button:hover {
    scale: 0.85;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
</style>
