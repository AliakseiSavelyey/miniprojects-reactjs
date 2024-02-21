import './App.css';
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import Quez from './components/Quez/Quez';
import Users from './components/Users/Users';


function App() {
  return (
    <div className="app">
      <Counter />
      <Modal />
      <Quez />
      <Users/>
    </div>
  );
}

export default App;
