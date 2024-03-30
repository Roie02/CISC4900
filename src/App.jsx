import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; 
import Homepage from './Components/Homepage'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import './index.css'



function App() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:5173/db.json')
    .then(resp => resp.json())
    .then(data => setUser(data))
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:5173/db.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(resp => resp.json())
    .then(data => {
      const { username, password } = form;
      const loggedInUser = data.users.find(user => user.username === username && user.password === password);
      if (loggedInUser) {
        setUser(loggedInUser);
        setForm({ username: '', password: '' });
        navigate('/');
      } else {
        alert('Incorrect username or password');
      }
    });
  }
  
  return (

      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage user={user} setUser={ setUser } />} />
          <Route path="/login" element={<Login form={form} setForm={setForm} handleSubmit={handleSubmit} />} />
        </Routes>
      </div>

  );
}

export default App
