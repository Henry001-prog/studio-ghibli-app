import styled from 'styled-components';

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
    
    @media(min-width: 1024px) and (max-width: 1366px) {
        height: 190px;
        width: 160px;
    }
`;