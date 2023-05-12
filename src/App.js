import logo from "./logo.svg";
import "./App.css";
import imagelogo from "./images/logo.png";
import Sidebar from "./componunts/Sidebar";
import Chat from "./componunts/Chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./componunts/Login";
import { useStateValue } from "./StateProvider";
function App() {
  // const [user,setUser] = useState(null)
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="">
          <Router>
            <div className="container">
              {/* <div className="row">
                <div className="col-12" >
                  <Sidebar />
                </div>
              </div> */}

              <Switch>

                <Route path="/rooms/:roomId" exact>
                  <div className="row">
                    <div className="col-12">

                      <Chat />
                    </div>
                  </div>
                </Route>
                <Route path="/" exact>
                  {/* <Chat /> */}
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      )}

    </div>
  );
}

export default App;
