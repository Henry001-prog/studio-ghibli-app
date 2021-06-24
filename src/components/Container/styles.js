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