import './App.css';
import Header from './components/Header';
import Container from './Container';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Container/>
        <Footer/>
      </main>

    </div>
  );
}

export default App;
