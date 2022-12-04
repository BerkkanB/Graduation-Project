import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import MatchingTable from './components/MatchingTable';
function App() {
  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-2 p-0">
            <Sidebar />
          </div>
          <div className="col-10 p-0">
            <MatchingTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
