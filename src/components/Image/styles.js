import styled from 'styled-components';
import Background from '../../img/Logotipo-do-Estudio-Ghibli.png';

export const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 110px;
    margin-top: 35px;
`;

export const Img = styled.img.attrs(props => ({
}))`
    height: 150px;
    width: 110px;
`;