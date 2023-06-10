import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';


// Parent component that houses all other component

function App() {
  return (
    <div className="App">
      < MovieList />
      < Header />
      
    </div>
  );
}

export default App;
