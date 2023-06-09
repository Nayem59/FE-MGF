import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllContacts from "./components/AllContacts";
import NewContact from "./components/NewContact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllContacts />} />
        <Route path="/newcontact" element={<NewContact />} />
      </Routes>
    </div>
  );
}

export default App;
