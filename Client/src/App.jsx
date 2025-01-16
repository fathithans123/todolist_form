import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
    <Header />
    <AddTodo />
    <TodoList />
    <ToastContainer />

    </>
  )
}