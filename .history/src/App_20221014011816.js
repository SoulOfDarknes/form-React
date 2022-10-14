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
        <div className='map__container'>
          <Map />
        </div>
      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>

  );
}

export default App;
