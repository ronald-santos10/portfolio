import Header from "./components/Header";
import About from "./components/About";
import Stacks from "./components/Stacks";
import MyProjects from "./components/MyProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Stacks/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
