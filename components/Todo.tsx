'use client'
import { completeTodo, deleteTodo } from "@/utils/actions"
import { useTransition } from "react"
import { TodoType } from "./componentsTypes"

const Todo = ({todo} : {todo: TodoType}) => {
  const [isPending, startTransition] = useTransition()

  return(
    <div className="px-4 py-1 border border-black/25 flex align-middle items-center">
      <div
        className={`flex-auto w-[80%] cursor-pointer ${ todo.completed ? 'line-through text-black/30' : ''}`}
        onClick={() => startTransition(() => completeTodo(todo.id))}
      >
        {todo.content}
      </div>
      <div className="flex-auto w-[20%] text-center">
        <button className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500" 
          onClick={() => startTransition(() => deleteTodo(todo.id))}>
            Remove
        </button>
      </div>
    </div>
    
  )
}

export default Todo