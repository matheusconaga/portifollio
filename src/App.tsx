import { createGlobalStyle, styled } from 'styled-components'
import { COLORS } from './constants/colors';
import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';
import Home from './screens/Home';

export default function App() {

  return (
    <AppContainer>
      <NavBar />
      <GlobalStyle />
      <MainContent>
        <Home />
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
  margin: 0 auto;
flex-direction: column;
  padding-top: 10em;
  gap: 1em;
`;