import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import MovieList from './components/MovieList';
import Stars from './components/Stars';

// Parent component that houses all other component

function App() {
  return (
    <div className="App">
      < MovieList sectionMain={true}/>
      < Header />
      < Stars />
      < MovieList sectionMain={false} />
    </div>
  );
}

export default App;
