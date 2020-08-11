import React from 'react';
import Header from './components/Header'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'

const Contendor=styled.div`
  max-width:600px;
  margin:0 auto;
`;
const ContenedorFormulario=styled.div`

  background:white;
  padding:3rem;
`;

function App() {
  return (
    <Contendor>
        <Header
        titulo='Cotizador de Seguros'
        />
        <ContenedorFormulario>
          <Formulario/>
        </ContenedorFormulario>
    </Contendor>

  );
}

export default App;
