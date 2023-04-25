import { useState } from "react";
import data from "./data";
import Users from "./people";
const App = () => {
  function clearPeople() {
    setPeople([]);
  }

  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="main container">
        <h2>{people.length} birthdays today</h2>
        {people.map((person) => {
          return <Users key={person.id} {...person}></Users>;
        })}
        <button className="btn btn-block" onClick={clearPeople}>
          Clear
        </button>
      </section>
    </main>
  );
};
export default App;
