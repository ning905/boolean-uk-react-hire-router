import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PersonProfile from "./pages/PersonProfile";
import "./styles.css";

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([]);

  function hirePerson(person) {
    setHiredPeople([...hiredPeople, person]);
  }

  function updateHiredPerson(hiredPerson) {
    console.log("hiredPerson: ", hiredPerson);
    const updatedHiredPeople = hiredPeople.map((person) =>
      person.registered.date === hiredPerson.registered.date
        ? hiredPerson
        : person
    );

    setHiredPeople(updatedHiredPeople);
    console.log("hiredPeople: ", updatedHiredPeople);
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />
        <Route
          path="/view/:id"
          element={
            <PersonProfile
              hirePerson={hirePerson}
              updateHiredPerson={updateHiredPerson}
            />
          }
        />
      </Routes>
    </>
  );
}
