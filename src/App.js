import React from 'react';
import Container from '@material-ui/core/Container';
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";


function App() {
  return (
      <div>
          <Navbar/>
          <Container maxWidth="sm">
              <Auth />
          </Container>
      </div>
  );
}

export default App;
