import React from "react";
import Header from './components/header'
import Picture from './components/picture'
import {Container} from './components/styles/Container.styled'

function App() {
  return (
    <Container>
      <Header />
      <Picture />
    </Container>
  );
}

export default App;
