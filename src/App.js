import './App.css';
import Create from './components/Create';
import Read_data from './components/Read_data';
import Update from './components/Update';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React <Link to='/create'>C</Link><Link to='/read'>R</Link>UD Operations</h2>

        <Routes>
          <Route path='/create' element={<Create/>} />
          <Route exact path='/read' element={<Read_data/>} />
          <Route exact path='/update' element={<Update/>} />
        </Routes>
      </div>
      
      
    </Router>
  );
}

export default App;
