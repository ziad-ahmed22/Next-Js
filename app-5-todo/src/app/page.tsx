import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

export const revalidate = 0;

export default function Home() {
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <AddTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList />
    </>
  );
}
