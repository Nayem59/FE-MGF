import "./App.css";
import AllContacts from "./components/AllContacts";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllContacts />} />
      </Routes>
    </div>
  );
}

export default App;
