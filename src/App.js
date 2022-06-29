import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import { authContext, fireBaseCotext } from "./Store/firebaseContext";
import Post from "./Store/postContext";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  const { setUser } = useContext(authContext);
  const { firebase } = useContext(fireBaseCotext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });

  return (
    <div>
      <Post>
          <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            {/* <Route path={"/login"}>
              <Login />
            </Route> */}
            <Route  path={"/create"}>
              <Create />
            </Route>
            <Route path={"/view"}>
              <View />
            </Route>
          </Router>
      </Post>
    </div>
  );
}

export default App;
