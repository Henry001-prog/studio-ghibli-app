import styled from 'styled-components';
import Background from '../../img/Studio-Ghibli.jpg';

export const DivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Background});
    background-repeat: repeat;
    background-size: 100%;
    width: 100vw;
`;

export const DivOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(2, 94, 210, 0.4);
`;

export const DivLoad = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
`;

// Mobile

export const DivImgMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${Background});
    background-repeat: repeat;
    background-size: 100%;
    width: 100vw;
`;

export const DivOverlayMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background-color: rgba(2, 94, 210, 0.4);
`;