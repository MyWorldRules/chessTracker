import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Loading from "./Pages/Loading/Loading";
import Navbar from "./Pages/Navbar/Navbar";

function App() {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Navbar />
            <Switch>
              <Route path="/chessTracker/home" exact component={Home} />
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
