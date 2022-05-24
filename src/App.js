import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';
import WatchListPage from './WatchListPage';
import { useState, useEffect } from 'react';
import { getUser } from './services/supabase-utils.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const user = getUser();
    setCurrentUser(user);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {currentUser ? <Redirect to="/search" /> : <AuthPage setCurrentUser={setCurrentUser} />}
          </Route>
          <Route exact path="/search">
            {currentUser ? <SearchPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/watch-list">
            {currentUser ? <WatchListPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
