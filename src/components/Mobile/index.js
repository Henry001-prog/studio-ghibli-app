import React, { useEffect } from 'react';

import { 
    DivMobile,
    DivTableMobile,
    TableMobile,
    Tbody,
    TrMobile,
    ThMobile,
    TdMobile,
} from './styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ImageMobile from '../../components/ImageMobile';

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
            <DivMobile>
                <ToastContainer autoClose={10000} />
                {film && film.map((item, index) => (
                <DivTableMobile key={index}>       
                    <TableMobile>
                        <thead>
                            <TrMobile>
                                <ImageMobile src={poster[index].img} />
                                <ThMobile style={{marginLeft: 30}}>Title</ThMobile>
                                <ThMobile style={{marginLeft: 30}}>Release Date</ThMobile> 
                                <ThMobile style={{marginLeft: 30}}>Score</ThMobile>
                            </TrMobile>
                        </thead>
                                        
                        <Tbody>
                            <TrMobile>
                                <TdMobile style={{marginLeft: 105} }>{item.title}</TdMobile>
                                <TdMobile style={{ marginLeft: 50, marginRight: 17 }}>{item.release_date}</TdMobile>
                                <TdMobile style={{ marginLeft: 50, marginRight: 45 }}>{item.rt_score}</TdMobile>
                            </TrMobile>
                        </Tbody>
                    </TableMobile>
                </DivTableMobile>
                        ))}
            </DivMobile>
                
        </>
    );
}