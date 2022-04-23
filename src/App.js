
import { Provider } from 'react-redux';
import './App.css';
import Buttons from './components/Buttons';
import Score from './components/Score';
import { store } from './redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <header>
      <h1>Tennis score</h1>
    </header>
    <main>
      <Score />
      <Buttons />
    </main>
    </div>
    </Provider>
  );
}

export default App;
