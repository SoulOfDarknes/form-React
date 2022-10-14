import Footer from "./components/Footer/Footer";
import Forma from "./components/Form/Form";
import Map from "./components/Map/Map";
import { Container } from "./styles/App"



function App() {
  return (
    <div>
      <Container>
        <Forma />
        <Map />
      </Container>
      <div>
        <Footer />
      </div>
    </div>

  );
}

export default App;
