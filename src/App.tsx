import { createGlobalStyle, styled } from 'styled-components'
import { COLORS } from './constants/colors';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Home from './screens/Home';
import Sobre from './screens/Sobre';
import Tecnologias from './screens/Tecnologias';
import Servicos from './screens/Servicos';
import Projetos from './screens/Projetos';
import Contato from './screens/Contato';

export default function App() {

  return (
    <AppContainer>
      <NavBar />
      <GlobalStyle />
      <MainContent>
        <Home />
        <Sobre />
        <Tecnologias />
        <Projetos />
        <Servicos />
        <Contato />
      </MainContent>

      <Footer />

    </AppContainer>
  )

}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: ${COLORS.dark};
    font-family: sans-serif;
  }
`;

const MainContent = styled.main`
display: flex;
width: 80%;
max-width: 1200px;
  margin: 0 auto;
flex-direction: column;
  padding-top: 10em;
  gap: 10em;
`;