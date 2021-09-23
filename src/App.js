import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col justify-center items-center w-full">
      <Navbar />

      <Footer />
    </main>
  );
}

export default App;
