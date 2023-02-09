import React, {useState} from 'react';
import Dashboard from './Dashboard';

export default function Login() {
    
    const [login, setLoggedIn] = useState(false)

    const handleClick = () => {
        setLoggedIn(!login)
    };

    return( 

            <div>
                <button onClick={handleClick}> Login </button>
                {login && <Dashboard />}
      {!login && <p>You are logged out</p>}
            </div>);
      
        
      }
