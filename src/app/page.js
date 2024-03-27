import Header from "./components/Header";
import About from "./components/About";
import Stacks from "./components/Stacks";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Stacks/>
      <MyProjects/>
      <Contact/>
      <div className="footer">
        <h3>Feito por <strong>Ronald Santos</strong></h3>
      </div>
    </main>
  );
}
