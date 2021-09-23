import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
      <Router>
        <main className="flex flex-col justify-center items-center w-full">
            <Navbar />
            <Switch >
                <Route path="/" exact component={About}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/resume" component={Resume}></Route>
            </Switch>
            <Footer />
        </main>
    </Router>
  );
}

export default App;
