import Header from "./components/Header";
import About from "./components/About";
import Stacks from "./components/Stacks";
import MyProjects from "./components/MyProjects";

export default function Home() {
  return (
    <main>
      <Header/>
      <About/>
      <Stacks/>
      <MyProjects/>
    </main>
  );
}
