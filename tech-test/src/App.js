import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AllContacts from "./components/AllContacts";
import NewContact from "./components/NewContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllContacts />} />
        <Route path="/newcontact" element={<NewContact />} />
        <Route path="/editcontact/:contact_id" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
