<script lang="ts">
  import Todo from "../Todo.svelte";

  const _todo = Todo.instance();
  const completed = $derived(_todo.all().filter((f) => f.done).length);
</script>

<small>{completed} / {_todo.all().length} completed todos</small>
