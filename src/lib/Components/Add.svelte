<script lang="ts">
  import Todo from "../Todo.svelte";

  const _todo = Todo.instance();

  let title = $state<string>("");
  let error = $state<string>("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();

    error = "";

    if (title.trim() === "") {
      error = "Title cannot be empty";
      return;
    }

    const todo: ITodo = {
      id: crypto.randomUUID(),
      title: title.trim(),
      done: false,
    };

    _todo.add(todo);

    title = "";

    return;
  };
</script>

<form onsubmit={handleSubmit}>
  <!-- svelte-ignore a11y_no_redundant_roles -->
  <fieldset role="group">
    <input type="text" placeholder="Enter todo title..." bind:value={title} />
    <input type="submit" value="Add" />
  </fieldset>
  {#if error !== ""}
    <small class="error">{error}</small>
  {/if}
</form>

<style>
  .error {
    color: tomato;
    font-size: 0.65rem;
  }
</style>
