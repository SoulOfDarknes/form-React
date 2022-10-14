import Footer from "./components/Footer/Footer";
import Forma from "./components/Form/Form";
import Map from "./components/Map/Map";
import { Container, Main } from "./styles/App"



function App() {
  return (
    <Main>
      <Container>
        <Forma />
        <Map />
      </Container>
      <Footer />
    </Main>

  );
}

export default App;
