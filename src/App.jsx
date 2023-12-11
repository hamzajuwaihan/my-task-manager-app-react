import TaskContainer from "./containers/TaskContainer";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTaskPage from "./pages/AddTaskPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TaskContainer />} />
        <Route path="add-task" element={<AddTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;