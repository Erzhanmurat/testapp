import {Navigate, Route, Routes} from "react-router-dom";
import Calendar from "./page/Calendar/Calendar";
import Capabilities from "./page/Capabilities";
import Task from "./page/Task";
import Project from "./page/Project";
import Auth from "./page/Auth";
import React from "react";
function App() {
  return (
          <Routes>
             <Route path="/" element={<Navigate to="/login"/> } />
             <Route path="/login" element={<Auth />} />
             <Route path="/task" element={<Task />} />
             <Route path="/projects" element={<Project />} />
             <Route path="/date" element={<Calendar />} />
             <Route path="/capabilities" element={<Capabilities />} />
          </Routes>
  );
}
export default App;
