import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/bootstrap/css/bootstrap.min.css";
import Users from "./Users";
import CreateUser from "./CreateUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/create" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
