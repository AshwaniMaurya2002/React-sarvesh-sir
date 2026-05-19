import style from "./DisplayTodo.module.css";

const DisplayTodo = ({ allTodos }) => {
  return (
    <div className={style.todoContainer}>
      {allTodos.length === 0 ? (
        <h2>No Todos Available</h2>
      ) : (
        allTodos.map((todo) => (
          <div key={todo.id} className={style.todoCard}>
            <p>{todo.text}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default DisplayTodo;
