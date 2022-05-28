import logo from './logo.svg';
import './App.css';
import './css/mainpage.css';
import './css/styleguide.css';
import './css/globals.css';
import Header from './Header'
import Hero from './Hero'

function App() {
  return (
    <div className="App mainpage" >
      <Header/>
        <Hero/>
    </div>
  );
}

export default App;
