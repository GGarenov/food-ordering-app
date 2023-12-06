import "./App.css";
import { About } from "./componenets/About";
import { Banner } from "./componenets/Banner";
import { ProductsPreview } from "./componenets/ProductsPreview";
import Navigation from "./navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <ProductsPreview />
      <About />
    </div>
  );
}

export default App;
