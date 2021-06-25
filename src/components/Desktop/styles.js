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


export const Div = styled.div`
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 180px;
    margin-bottom: 150px;
    margin-left: 5px;
`;

export const DivTable = styled.div`
    display: flex;
    width: 1000px;
    align-items: center;
    justify-content: center;
`;

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-top: 45px;
    margin-bottom: 2px;
    border-radius: 10px;
    height: 22vh;
    width: 65vw;
    background-color: white;
    box-shadow: 3px 3px 5px 4px rgba(0, 0, 0, 0.7);
    :hover {
        background-color: #4682B4;
        border: 1px solid #d0d0d0;
        transition: .3s ease-in-out;
    }
    @media(min-width: 1024px) and (max-width: 1366px) {
        width: 80vw;
    }
    @media(min-width: 803px) and (max-width: 1022px) {
        width: 83vw;
    }
`;

export const Tr = styled.tr`
    display: flex;
    justify-content: center;
    height: 80px;
    width: 55vw;
    margin-left: 100px;
`;

export const Th = styled.th`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-collapse: collapse;
    font-size: 22px;
    height: 40px;
    width: 300px;
    margin-left: 100px;
    
    @media(min-width: 1024px) and (max-width: 1366px) {
        font-size: 25px;
    }
`;

export const Td = styled.td`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 300px;
    color: black;
    font-size: 20px;
    border-collapse: collapse;
    font-weight: bold;

    @media(min-width: 1024px) and (max-width: 1366px) {
        margin-right: 1px;
        font-size: 22px;
    }
`;

export const TdSecond = styled.td`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 300px;
    color: black;
    font-size: 20px;
    border-collapse: collapse;
    font-weight: bold;

    @media(min-width: 1024px) and (max-width: 1366px) {
        margin-left: 105px;
        font-size: 22px;
    }
`;

export const TdLast = styled.td`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 300px;
    color: black;
    font-size: 20px;
    border-collapse: collapse;
    font-weight: bold;

    @media(min-width: 1024px) and (max-width: 1366px) {
        margin-right: 70px;
        font-size: 22px;
    }
`;