import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import WebSettings from './WebSettings';
import Home from './Home';
import Login from './Login';
import Display from './Display';
import Child from './Child';
import Parent from './Parent';




function App() {
  return (
    <div className="App">
      <h1></h1>
      <Router>
      <Routes>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/websettings' element={<WebSettings/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/display' element={<Display/>}></Route>
      <Route path='/parent' element={<Parent/>}></Route>
      <Route path='/child' element={<Child/>}></Route>

      </Routes>
      </Router>

    </div>
  );
}

export default App;
