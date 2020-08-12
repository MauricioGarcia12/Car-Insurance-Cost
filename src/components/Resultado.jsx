import React from 'react';
import styled from '@emotion/styled'

const Mensaje =styled.p`
background: rgb(127,224,237);
margin-top: 2rem;
padding:1rem;
text-align:center;
font-size:17px;
color:#00838F;
font-weight:bold;
`;

    

const TextoCotizacion =styled.p`
    color:#00838f;
    padding:1rem;
    text-transform:uppercase;
    font-weight:bold;
    margin:0;

`;
const ResultadoCotizacion =styled.div`
    text-align:center;
    padding:0;
    border: 1px solid #26c6da;
    background:rgb(127,224,237);
    margin-top:1rem;
    position:relative;
`;
const Resultado = ({cotizacion}) => {

    return (  
        (cotizacion === 0) 
        ? <Mensaje>Elige marca, year y tipo de seguro</Mensaje>
        : 
        (
            <ResultadoCotizacion>
                <TextoCotizacion>El total es: $ {cotizacion}</TextoCotizacion>
            </ResultadoCotizacion>
        )
    );
}
 
export default Resultado;