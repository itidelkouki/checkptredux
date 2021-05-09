import "./App.css";
import Todolist from "./components/Todolist";
import AddTODO from "./components/Add";
import Filter from "./components/Filter";
export default function App() {
  return (
    <div className="App">
      <AddTODO />
      <Todolist />
      <Filter />
    </div>
  );
}
