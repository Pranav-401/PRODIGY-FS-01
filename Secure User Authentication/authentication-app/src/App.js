import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated && <h3>Hello {user.name}</h3>}
        {isAuthenticated ? (
          <button onClick={(e) => logout()} className="btn">
            Logout
          </button>
        ) : (
          <button onClick={(e) => loginWithRedirect()} className="btn">
            Login
          </button>
        )}
      </header>
    </div>
  );
}

export default App;
