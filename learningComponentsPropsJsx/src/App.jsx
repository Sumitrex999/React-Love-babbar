import UserCard from "./components/UserCard"
import './App.css';
import rexcy from './assets/rexcy.jpg'

function App() {

  return (
    <>
    <div className="container">
      <UserCard name="Sumit" desc="Description1" img={rexcy} style={{"border-radius":"50px"}}/>
      <UserCard name="Rex" desc="Description2" img={rexcy} style={{"border-radius":"50px"}}/>
      <UserCard name="Rexcy" desc="Description3"img={rexcy} style={{"border-radius":"50px"}}/>
    </div>
      
    </>
  )
}

export default App
