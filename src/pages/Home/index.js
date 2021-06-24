import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { 
    DivImg, 
    DivOverlay,
    DivLoad, 
    Div, 
    DivTable, 
    Table, 
    Tr, 
    Th, 
    Td, 
    DivImgMobile,
    DivOverlayMobile,
    DivMobile,
    DivTableMobile,
    TableMobile,
    TrMobile,
    ThMobile,
    TdMobile,
} from './styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Image from '../../components/Image';
import ImageMobile from '../../components/ImageMobile';

import poster from '../../utils/Constants';

import Loader from "react-loader-spinner";
import _ from 'underscore';

import useViewport from '../../resources/responsive';
import { useSelector, useDispatch } from 'react-redux';
import { watchFilms } from '../../store/actions';

export default function Home({ setToken, props }) {
    const [loading, setLoading] = useState(true);
    //console.log('dados:', data)

    const film = useSelector((state) => state.films, _.isEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        //setLoading(true);
        dispatch(watchFilms());
        film !== null ? setLoading(false) : setLoading(true);
        function message() {
            toast.success('Welcome to Studio Ghibli App');
        }
        message();
    }, [dispatch, film]);
    
    function nextPage() {
        setToken('pass123');
        
    }

    const { width } = useViewport();
    const breakpoint = 800; 
    
    return (
        width > breakpoint ?
        <DivImg>
            <ToastContainer autoClose={10000} />
            <DivOverlay>
                { loading ?
                    <DivLoad>
                        <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        />
                    </DivLoad>

                    :
                    
                    <Div>
                        
                        {film && film.map((item, index) => (
                            <DivTable key={index}>
                                
                                    <Table>
                                        <thead>
                                            <Tr>
                                            <Image src={poster[index].img} />
                                            
                                                
                                                <Th style={{}}>Title</Th>
                                                
                                                
                                                <Th style={{}}>Release Date</Th> 
                                                <Th style={{}}>Score</Th>
                                            </Tr>
                                        </thead>
                                        
                                        <tbody>
                                            <Tr>
                                                <Td 
                                                    style={
                                                        {
                                                            marginLeft: 211,   
                                                            
                                                        }
                                                    }
                                                >{item.title}</Td>
                                                <Td style={{ marginLeft: 100, }}>{item.release_date}</Td>
                                                <Td style={{ marginLeft: 100, }}>{item.rt_score}</Td>
                                            </Tr>
                                        </tbody>
                                    </Table>
                            </DivTable>
                        ))}
                    </Div>
                }
            </DivOverlay>
            
            
        </DivImg>
        :

        <DivImgMobile>
            <ToastContainer autoClose={10000} />
            <DivOverlayMobile>
                { loading ?
                    <DivLoad>
                        <Loader
                        type="Oval"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        />
                    </DivLoad>

                    :
                    
                    <DivMobile>
                        
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
                                        
                                        <tbody style={{marginRight: 30}}>
                                            <TrMobile>
                                                <TdMobile 
                                                    style={
                                                        {
                                                            marginLeft: 95,   
                                                            
                                                        }
                                                    }
                                                >{item.title}</TdMobile>
                                                <TdMobile style={{ marginLeft: 50, marginRight: 20 }}>{item.release_date}</TdMobile>
                                                <TdMobile style={{ marginLeft: 50, marginRight: 8 }}>{item.rt_score}</TdMobile>
                                            </TrMobile>
                                        </tbody>
                                    </TableMobile>
                            </DivTableMobile>
                        ))}
                    </DivMobile>
                }
            </DivOverlayMobile>
            
            
        </DivImgMobile>
        
    );
}

Home.propTypes = {
    setToken: PropTypes.func.isRequired
}