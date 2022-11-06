import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { Register } from "./components/Register.jsx";
import { Fill } from "./components/Fill.jsx";
import { Talk } from "./components/Talk.jsx";
import { Game } from "./components/Game.jsx";
import { Login } from "./components/Login.jsx";
import { Last } from "./components/Last.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="fill" element={<Fill />} />
          <Route path="talk" element={<Talk />} />
          <Route path="home" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="last" element={<Last />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
