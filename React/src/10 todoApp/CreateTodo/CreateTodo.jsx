import style from "./CreateTodo.module.css";

const CreateTodo = ({ todo, setTodo, handleCreateTodo }) => {
  return (
    <form
      onSubmit={handleCreateTodo}
      className={style.todoForm}
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    >
      <input type="text" name="todo" id="todo" placeholder="Enter a todo.." />
      <button>Add</button>
    </form>
  );
};

export default CreateTodo;
