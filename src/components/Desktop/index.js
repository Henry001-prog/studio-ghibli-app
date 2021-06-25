import React, { useEffect } from 'react';

import { 
    Div, 
    DivTable, 
    Table, 
    Tr, 
    Th, 
    Td, 
    TdSecond,
    TdLast
} from './styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Image from '../../components/Image';

import poster from '../../utils/Constants';

import _ from 'underscore';

import { useSelector } from 'react-redux';

export default function Home() {

    const film = useSelector((state) => state.films, _.isEqual);
    

    useEffect(() => {
        function message() {
            toast.success('Welcome to Studio Ghibli App');
        }
        message();
    }, []);
    
    
    return (
        <>       
            <Div>
                <ToastContainer autoClose={10000} />
                {film && film.map((item, index) => (
                <DivTable key={index}>
                                
                    <Table>
                        <thead>
                            <Tr>
                                <Image src={poster[index].img} />               
                                <Th>Title</Th>
                                <Th>Release Date</Th> 
                                <Th>Score</Th>
                            </Tr>
                        </thead>
                                        
                        <tbody>
                            <Tr>
                                <Td style={{ marginLeft: 211 }}>{item.title}</Td>
                                <TdSecond style={{ marginLeft: 100 }}>{item.release_date}</TdSecond>
                                <TdLast style={{ marginLeft: 100 }}>{item.rt_score}</TdLast>
                            </Tr>
                        </tbody>
                    </Table>
                </DivTable>
                        ))}
            </Div>
        </>
    );
}