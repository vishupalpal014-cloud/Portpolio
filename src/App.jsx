import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resune";
import Project from "./Project";
import Dashboard from "./Dashboard";




function App() {
  return (
    <>
      <Nav />
      <div className="pt-16">
        <Home />
        <About />
       <Resume />
       <Project />
        {/* <section
          id="projects"
          className="h-screen bg-green-600 flex items-center justify-center text-white text-3xl font-bold"
        >
          Projects Section
        </section> */}
        <Contact />
         <Dashboard />
      </div>
    </>
  );
}

export default App;
