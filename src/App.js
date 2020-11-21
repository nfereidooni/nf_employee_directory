import './App.css';
import Header from './components/Header'
import Directory from './components/Directory'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body className="App-body">
        <Directory />
      </body>
    </div>
  );
}

export default App;
