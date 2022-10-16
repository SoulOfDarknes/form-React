import Footer from "./components/Footer/Footer";
import Forma from "./components/Form/Form";
import Map from "./components/Map/Map";
import { Container, Main} from "./styles/App"
// import { ReactComponent as Cloud } from "../public/img/cloud.svg";




function App() {
  return (
    <Main>
      <Container>
        <img src="img/yellow_smile.png" alt="top slime" width={80} height={80} />
        <Forma />
        <Map />
      </Container>
      <Footer />
    </Main>
  );
}

export default App;
