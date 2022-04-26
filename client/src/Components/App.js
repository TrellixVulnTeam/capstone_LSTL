// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./SignUp";
import Home from "./Home";
import Navbar from "./Navbar";


function App() {
  const [ user, setUser ] = useState("")

  useEffect(() => {
    fetch("/me")
    .then((r)=>{
      if(r.ok) {
        r.json().then((user) => setUser(user))
      }
    });
  }, [])


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login 
            user={user}
            setUser={setUser}/>
          </Route>
          <Route path="/signup">
            <Signup
            setUser={setUser}
            />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;