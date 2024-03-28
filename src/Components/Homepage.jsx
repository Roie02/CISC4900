import { useNavigate } from 'react-router-dom';


function Homepage({user, setUser}) { 
  const navigate = useNavigate();

  function handleLogoutClick() {
    setUser(false)
    navigate('/')
}
  
return (
  <div> 
    {user.username ? <button onClick={handleLogoutClick}>
      Log Out
    </button>
    :
    <button onClick= {() => navigate('/login')}>
      Log In
      </button>
      }
  
  <h1> 
    {user.username ? `${user.username}'s Garage` : 'Revify'}
  </h1>


  </div>

);
}

export default Homepage