import React,{useState} from 'react';
import Header from './components/Header'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'


const Contendor=styled.div`
  max-width:600px;
  margin:0 auto;
`;
const ContenedorFormulario=styled.div`

  background:white;
  padding:3rem;
`;

function App() {
  const [resumen,guardarResumen]=useState({
    cotizacion:0,
    datos:{
        marca:'',
        year:'',
        plan:''
    }
  });

  //extraer datos
  const {datos,cotizacion} = resumen;

  return (
    <Contendor>
        <Header
        titulo='Cotizador de Seguros'
        />
        <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
          />


          <Resumen
            datos={datos}
          />
          <Resultado
            cotizacion={cotizacion}
          />
        </ContenedorFormulario>
    </Contendor>

  );
}

export default App;
