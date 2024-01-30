import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  // await new Promise((resolve) => setTimeout(() => resolve(), 2000))
  const todos = await db.todo.findMany({
    where: {},
    orderBy: {
      createdAt: 'desc',
    },
  })

  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div className="mt-3 mb-3">
      <h2>My todos list</h2>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage