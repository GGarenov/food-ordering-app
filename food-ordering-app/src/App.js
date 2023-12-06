import "./App.css";
import { About } from "./componenets/About";
import { Banner } from "./componenets/Banner";
import Navigation from "./navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <About />
    </div>
  );
}

export default App;
