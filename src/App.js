import './App.css';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import Photos from './components/Photos/Photos';
import { Projects } from './components/Projects/Projects';
import { Skillset } from './components/Skillset/Skillset';

function App() {
  return (
    <div>
    <Header/>
    <Main/>
    <About/>
    <Skillset/>
    <Projects/>
    <Photos/>
    <Footer></Footer>
    </div>
  );
}

export default App;
