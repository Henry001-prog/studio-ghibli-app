import styled from 'styled-components';

export const DivImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 110px;
    margin-top: 30px;
    height: 75px;
    width: 50px;
    margin-left: 35px;
    @media(min-width: 767px) and (max-width: 1025px) {
        justify-content: flex-end;
        margin-left: 1px;
        margin-right: 20px;
    }
`;

export const Img = styled.img.attrs(props => ({
}))`
    height: 75px;
    width: 50px;
    @media(min-width: 767px) and (max-width: 1025px) {
        height: 170px;
        width: 130px;
    }
`;