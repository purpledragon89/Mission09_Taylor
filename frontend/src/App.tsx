import './App.css';
function Welcome()
{
  return <h1>Welcome to the NCAA teams directory!</h1>
}

function Team(
  {
    school,
    name,
    city,
    state
  }:
  {
    school: string;
    name: string;
    city: string;
    state: string;
  }
){
  return
  (
    <>
    <h2>{school}</h2>
    <h2>Home of the: {name}</h2>
    <h2>Location: {city}, {state}</h2>
    </>
  );
}

function TeamList()
{
  return
  (
    <>
    {TeamNames.map((singleteam)=>
    (<Team {...singleteam} />
      ))}
    </>
  )
}

function App() {
  
  return (
    <>
    <Welcome />
    
    </>
  );
}
