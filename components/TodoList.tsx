import Todo from "./Todo";
import { TodoType } from "./componentsTypes";

const TodoList = ({todos}: {todos: TodoType[]}) => {
  return(
    <div className="mt-3 mb-3">
      {todos.map((todo: TodoType) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList