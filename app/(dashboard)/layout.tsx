import NewTodoForm from "@/components/NewTodoForm";

const DashboardLayout = ({children}) => {
  return <div>
    <h1 className="font-bold">ToDos</h1>
    <div>
      <NewTodoForm/>
    </div>
    <hr/>
    <div>{children}</div>
  </div>
}

export default DashboardLayout;