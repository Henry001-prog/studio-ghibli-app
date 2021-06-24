import styled from 'styled-components';
import Background from '../../img/Studio-Ghibli.jpg';
import { DivImage } from '../../components/Image/styles';

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


export const DivMobile = styled.div`
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 180px;
    margin-bottom: 150px;
    margin-left: 5px;
`;

export const DivTableMobile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TableMobile = styled.table`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 45px;
    margin-right: 15px;
    margin-bottom: 2px;
    border-radius: 10px;
    height: 22vh;
    width: 90vw;
    background-color: white;
    box-shadow: 3px 3px 5px 4px rgba(0, 0, 0, 0.7);
    :hover {
        background-color: #4682B4;
        border: 1px solid #d0d0d0;
    }
`;

export const TrMobile = styled.tr`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 80px;
    width: 55vw;
    margin-right: 30px;
`;

export const ThMobile = styled.th`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    border-collapse: collapse;
    font-size: 10px;
    height: 40px;
    width: 300px;
    margin-right: 15px;
    
`;

export const TdMobile = styled.td`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    border: 1px solid black;
    margin-bottom: 50px;
    width: 300px;
    color: black;
    font-size: 8px;
    border-collapse: collapse;
    font-weight: bold;
`;




export const Button = styled.button`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 75vw;
    border: 0;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    
`;