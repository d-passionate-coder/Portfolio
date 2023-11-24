import Navbar from "./components/navbar";
import Home from "./components/home";
import Projects from "./components/projects";
import About from "./components/about";
import Techstack from "./components/techstack";

function App() {
  return (
    <>
      <div className="font-neutraface text-foreground bg-background max-w-full">
        <Navbar />
        <Home />
        <Projects/>
        <About/>
        <Techstack />
      </div>
    </>
  );
}

export default App;
