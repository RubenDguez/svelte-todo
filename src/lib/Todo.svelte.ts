export default class Todo {
  private readonly TODO_LOCAL_STORAGE_ITEM = 'todos';
  private readonly TODO_LOCAL_STORATE_FILTER = 'filter';

  private static _instance: Todo;
  private _todos = $state<Array<ITodo>>([]);
  private _filterBy = $state<TFilter>(<TFilter>window.localStorage.getItem(this.TODO_LOCAL_STORATE_FILTER) ?? 'All');

  private constructor() {
    const todos: Array<ITodo> = JSON.parse(window.localStorage.getItem(this.TODO_LOCAL_STORAGE_ITEM) ?? '[]');
    
    todos.forEach((todo) => {
      this._todos.push(todo);
    });
  }

  toLocalStorage(): void {
    window.localStorage.setItem(this.TODO_LOCAL_STORAGE_ITEM, JSON.stringify(this._todos));
  }

  static instance(): Todo {
    if (Todo._instance === undefined)
      Todo._instance = new Todo();

    return Todo._instance;
  }

  set filter(v: TFilter) {
    this._filterBy = v;
  }

  get filter() {
    return this._filterBy;
  }

  getById(id: string): ITodo {
    const todo = this._todos.find((f) => (f.id === id));
    return todo!;
  }

  all(): Array<ITodo> {
    return this._todos;
  }

  filtered(): Array<ITodo> {
    window.localStorage.setItem(this.TODO_LOCAL_STORATE_FILTER, this._filterBy);

    switch (this._filterBy) {
      case "Completed":
        return this._todos.filter((f) => (f.done))
      case "Pending":
        return this._todos.filter((f) => (!f.done))
      case "All":
      default:
        return this._todos;
    }
  }

  add(todo: ITodo): void {
    this._todos.push(todo);
    this.toLocalStorage();
  }

  toggleDone(id: string): void {
    const todo = this._todos.find((f) => (f.id === id))!;
    todo.done = !todo.done;
    this.toLocalStorage();
  }
}
