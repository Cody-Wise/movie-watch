import './App.css';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import AuthPage from './AuthPage';
import WatchlistPage from './WatchlistPage';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <AuthPage />
          </Route>
          <Route exact path="/search">
            {user ? <SearchPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/watchlist">
            {user ? <WatchlistPage /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
