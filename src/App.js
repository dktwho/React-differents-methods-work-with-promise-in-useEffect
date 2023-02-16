import './App.css';
import Posts from './components/Posts';
import Users from './components/Users';
import Albums from './components/Albums';

function App() {
  return (
    <div className="App">
     <Posts />
     <br />
     <hr />
     <Users />
     <br />
     <hr />
     <Albums />
    </div>
  );
}

export default App;
