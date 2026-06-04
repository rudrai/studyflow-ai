import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import FocusTimer from "./pages/FocusTimer";
import Analytics from "./pages/Analytics";
import Notes from "./pages/Notes";
import Subjects from "./pages/Subjects";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<AppLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/planner" element={<Planner />} />

          <Route path="/focus" element={<FocusTimer />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/notes" element={<Notes />} />

          <Route path="/subjects" element={<Subjects />} />

          <Route path="/settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;