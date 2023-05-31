import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import MovieList from './components/MovieList';
import Stars from './components/Stars';


function App() {
  return (
    <div className="App">
      < Main />
      < Header />
      < Stars />
      < MovieList />
    </div>
  );
}

export default App;
