import React, { useEffect } from 'react';
import { DivOverlay, H1, H2 } from './styles';
import { toast, ToastContainer } from 'react-toastify';
import Container from '../../components/Container';

export default function NotFound() {

    useEffect(() => {
        function message() {
            toast.error('There is nothing to see here. Go back to the previous page.');
        }
        message();
    },[]);

    return(
        <Container>
             <DivOverlay>
                <ToastContainer autoClose={15000} />
                <H1>404</H1>
                <H2>Página não encontrada!</H2>
            </DivOverlay>
        </Container>
    );
}