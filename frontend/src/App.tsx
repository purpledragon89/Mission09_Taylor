import './App.css';
import data from '/Users/rileytaylor/Desktop/Mission09_Taylor/frontend/src/CollegeBasketballTeams.json';

function Welcome() {
  return <h1>Welcome to the NCAA teams directory!</h1>;
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <h2>{school}</h2>
      <h3>Home of the: {name}</h3>
      <h4>
        Location: {city}, {state}
      </h4>
      <hr />
    </>
  );
}

function TeamList() {
  return (
    <>
      {data.teams.map((team) => (
        <div key={team.tid}>
          {team.school} - {team.name}
        </div>
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}
