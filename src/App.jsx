import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar';
import './index.css'



function App() {

  const [user, setUser] = useState({user:"John"});
  
  return (
    <Router>
    <div>
      <Homepage user ={user} setUser={setUser} />
      <Navbar />
    </div>
    </Router>
  );

}

export default App
