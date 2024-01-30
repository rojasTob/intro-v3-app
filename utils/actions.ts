'use server'
import db from "@/utils/db"
import { revalidatePath } from "next/cache"

export const newTodo = async(data: FormData) => {
  const newTodo = data.get("todo") as string

  if(newTodo){
    await db.todo.create({
      data:{
        content: newTodo,
      },
    })
    //If you must perform a mutation in your server action, as in you change some data and need that change to be reflected on the screen, 
    //you can use revalidate to tell Next.js to fetch the data again for that given path
    revalidatePath("/todos") 
  }
}

export const completeTodo = async(id: string) => {
  await db.todo.update({
    where: {id},
    data: {
      completed: true,
    },
  })
  revalidatePath("/todos")
}