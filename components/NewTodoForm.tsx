import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return(
    <div className="mt-3 mb-3">
      <form action={newTodo}>
        <div className="col-span-full">
          <label className="block text-sm font-medium leading-6 text-gray-900">Write something you want to do:</label>
          <div className="mt-2">
            <textarea id="about" name="todo" className="block w-full rounded-md border-0 text-gray-900 sm:text-sm sm:leading-6"></textarea>
          </div>
          <button type="submit" className="mt-3 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewTodoForm