import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App h-screen w-screen">
      <BrowserRouter> <Layout/></BrowserRouter>
    
    </div>
  );
}

export default App;
