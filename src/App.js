import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}/>
        <Route path="/users/:id" element={isLoggedIn ? <UserDetail /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
