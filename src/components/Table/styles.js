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
    padding-top: 50px;
    margin-left: 5px;
`;

export const DivTable = styled.div`
    display: flex;
    width: 1000px;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 45px;
`;

export const Table = styled.table`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid black;
    border-radius: 45px;
    padding-top: 45px;
    height: 22vh;
    width: 80vw;
    background-color: #1E90FF;
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
    margin-left: 100px;
`;

export const Th = styled.th`
    display: flex;
    color: blue;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid black;
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
    border: 1px solid black;
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
    margin-top: 10px;
    cursor: pointer;
    outline: none;
    
`;