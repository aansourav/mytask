import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskBoard from "./components/task/TaskBoard";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center" >
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
