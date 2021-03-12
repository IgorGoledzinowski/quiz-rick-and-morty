import { Router } from "@reach/router";
import Episodes from './pages/episodes';
import Episode from './pages/episode';
import GlobalStyle from './globalStyles';
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Episodes path="/" />
        <Episode path="/episode/:episodeId" />
      </Router>
    </>
  );
} 

export default App;
