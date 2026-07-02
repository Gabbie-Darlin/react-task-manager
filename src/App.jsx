import { Routes, Route } from "react-router-dom";

// Import the components and pages
import Navbar from "./components/Navbar";

// Import the pages
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import TasksMenu from "./pages/TasksMenu";
import CreateTask from "./pages/CreateTask";
import TaskDetails from "./pages/TaskDetails";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {

  return (
    <>

      <Navbar />

      <Routes>

        <Route 
        path="/" 
        element={<Home />} 
        />

        <Route 
        path="/dashboard"
        element={<Dashboard />}
        />
        
        <Route 
        path="/tasks" 
        element={<Tasks />}
        />

        <Route 
        path="/tasks/menu" 
        element={<TasksMenu />}
        />

        <Route 
        path="/tasks/:id" 
        element={<TaskDetails />}
        />

        <Route 
        path="/tasks/new" 
        element={<CreateTask />}
        />

        <Route 
        path="/notifications" 
        element={<Notifications />}
        />

        <Route 
        path="/profile" 
        element={<Profile />}
        />

        <Route 
        path="/settings" 
        element={<Settings />}
        />

        <Route 
        path="/reports" 
        element={<Reports />}
        />

        <Route 
        path="/about" 
        element={<About />}
        />
        
        <Route 
        path="*" 
        element={<NotFound />}
        />
        
      </Routes>
    </>
  );
}


