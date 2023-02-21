import React, { useState, createContext } from 'react';
import ButtonAppBar from './Components/ButtonAppBar';
import Dashboard from './Components/Dashboard';
import LogIn from './Components/LogIn';
import './App.css';

export const LoginContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {},
});

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <ButtonAppBar />
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        {loggedIn ? (
          <LogIn />
        ) : (
          <Dashboard />
        )}
      </LoginContext.Provider>
    </div>
  );
}

export default App;