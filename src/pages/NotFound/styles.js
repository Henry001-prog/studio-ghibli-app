import styled from 'styled-components';
import Background from '../../img/Studio-Ghibli.jpg';

export const Div = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: flex-start;
    background-image: url(${Background});
    background-repeat: repeat;
    background-size: 100%;
    width: 100vw;
`;

export const DivOverlay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    background-color: rgba(2, 94, 210, 0.4);
`;

export const H1 = styled.h1``;

export const H2 = styled.h2``;