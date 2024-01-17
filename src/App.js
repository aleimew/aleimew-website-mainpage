import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import { Base, GlobalStyle } from './Components/PageElements';

function App() {
  return (
    <Base>
      <GlobalStyle />
      <Layout />
    </Base >
  );
}

export default App;