import { useEffect, useState } from "react";
import PeopleList from "./components/PeopleList";

function Dashboard(props) {
  const { hiredPeople } = props;

  const [people, setPeople] = useState([]);

  const apiUrl = "https://randomuser.me/api/";
  useEffect(() => {
    fetch(`${apiUrl}?results=50`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        setPeople(data.results);
      });
  }, []);

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  );
}

export default Dashboard;
