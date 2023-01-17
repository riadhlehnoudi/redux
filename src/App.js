import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Todolist from './components/Todolist';

function App() {
  return (
    <div className='app'>
   <Header/>
   <Todolist/>
    </div>
  );
}

export default App;
