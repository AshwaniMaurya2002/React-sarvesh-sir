import style from "./DisplayTodo.module.css";

const DisplayTodo = ({ allTodos, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div className={style.todoContainer}>
      {allTodos.length === 0 ? (
        <h2>No Todos Available</h2>
      ) : (
        allTodos.map((todo) => (
          <div key={todo.id} className={style.todoCard}>
            <p>{todo.text}</p>
            <div className={style.btn}>
              <button
                className={style.edit}
                onClick={() => {
                  handleEditTodo(todo.id);
                }}
              >
                Edit
              </button>
              <button
                className={style.delete}
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayTodo;
