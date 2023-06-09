import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllContacts from "./components/AllContacts";
import NewContact from "./components/NewContact";
import EditContact from "./components/EditContact";
import AreaContacts from "./components/AreaContacts";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<AllContacts />} />
        <Route path="/newcontact" element={<NewContact />} />
        <Route path="/areacontacts" element={<AreaContacts />} />
        <Route path="/editcontact/:contact_id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
