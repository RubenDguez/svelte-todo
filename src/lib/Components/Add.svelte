<script lang="ts">
  import Todo from "../Todo.svelte";
  const _todo = Todo.instance();

  let titleInputEl: HTMLInputElement;

  let error = $state<string>("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const title = titleInputEl.value.trim();

    if (title === "") {
      titleInputEl.value = title;
      titleInputEl.focus();
      error = "Title cannot be empty";
      return;
    }

    _todo.add({
      id: crypto.randomUUID(),
      title: title.trim(),
      done: false,
    });

    error = "";
    titleInputEl.value = "";
    titleInputEl.focus();

    return;
  };
</script>

<form onsubmit={handleSubmit}>
  <!-- svelte-ignore a11y_no_redundant_roles -->
  <fieldset role="group">
    <input
      type="text"
      placeholder="Enter todo title..."
      bind:this={titleInputEl}
    />
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
