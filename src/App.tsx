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
import Curriculo from './screens/Curriculo';

export default function App() {

  return (
    <AppContainer>
      <NavBar />
      <GlobalStyle />
      <MainContent>
        
        <section id="home">
          <Home />
        </section>

        <section id="sobre">
          <Sobre />
        </section>

        <section id="tecnologias">
          <Tecnologias />
        </section>

        <section id="projetos">
          <Projetos />
        </section>

        <section id="servicos">
          <Servicos />
        </section>

        <section id="curriculo">
          <Curriculo />
        </section>

        <section id="contato">
          <Contato />
        </section>
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

  html {
    scroll-behavior: smooth;
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
  gap: 8em;
  section {
  scroll-margin-top: 120px;
}
`;