import "./App.css";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Loading from "./Pages/Loading/Loading";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [user, loading] = useAuthState(auth);
  const idRegex = "([0-9a-zA-Z_-]*)";
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
              <Route path={`/opponent-${idRegex}`} component={Home} />
              <Route path="/games" exact component={Game} />
              <Route path="/" component={Game} />
            </Switch>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
