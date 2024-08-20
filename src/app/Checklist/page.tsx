import { AddTask } from "../compornents/AddTask"
import Header from "../compornents/Header"
import { TodoList } from "../compornents/TodoList"
import { getAllTodos } from "../../api";

export default async function Home() {
  const todos = await getAllTodos();
  
  return (
    <>
    <Header/>
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        投資を始めるためのSTEP</h1>
        <p className="text-2xl pt-10 text-center">理解できたら消して
          <br/>
          自分のこれからの目標などを入力しよう
        </p>
      <div className="w-full max-w-xl mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask/>
          <TodoList todos={todos}/>
        </div>
      </div>
    </main>
    </>
  )
}