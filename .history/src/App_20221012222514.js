import "../src/styles/main.scss";
import Footer from "./components/Footer/Footer";
import Forma from "./components/Form/Form";
import Map from "./components/Map/Map";

import "./styles/App.scss"

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <Forma />
        <Map />
      </div>
      <Footer />
    </div>

  );
}

export default App;
