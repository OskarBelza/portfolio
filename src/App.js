import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import Hero from "./components/hero";
import {Col} from "react-bootstrap";
import AboutMe from "./components/main";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header />
            </header>
            <main>
                <Hero />
                <AboutMe />
            </main>
        </div>
    );
}

export default App;
