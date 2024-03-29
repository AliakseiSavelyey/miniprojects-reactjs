import './App.css';
import Collection from './components/Collection/Collection';
import Convertor from './components/Convertor/Convertor';
import Counter from './components/Counter/Counter';
import Modal from './components/Modal/Modal';
import Quez from './components/Quez/Quez';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="app">
      <Counter />
      <Quez />
      <Modal />
      <Collection />
      <Users />
      <Convertor />
    </div>
  );
}

export default App;
