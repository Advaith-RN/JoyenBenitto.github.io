import './App.scss';
import {BrowserRouter as Routes, Route, Router} from 'react-router-dom';
import Layout from './components/Layout'

function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Layout/>} />
      </Router>
    </>
    
  );
}

export default App;
