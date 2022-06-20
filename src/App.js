import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Calendar from "./component/Calendar/Calendar";
import Capabilities from "./component/Capabilities";
import Task from "./component/Task";
import Project from "./component/Project";
import Auth from "./page/Auth";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Navigate to="/login"/> } />
             <Route path="/login" element={<Auth />} />
             <Route path="/projects" element={<Project />} />
             <Route path="/date" element={<Calendar />} />
             <Route path="/capabilities" element={<Capabilities />} />
             <Route path="/task" element={<Task />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
}
export default App;
