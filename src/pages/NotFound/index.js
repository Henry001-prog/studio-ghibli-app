import React from 'react';
import { Div, DivOverlay, H1, H2 } from './styles';

export default function NotFound() {
    return(
        <Div>
             <DivOverlay>
                <H1>404</H1>
                <H2>Página não encontrada!</H2>
            </DivOverlay>
        </Div>
    );
}