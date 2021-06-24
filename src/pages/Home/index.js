import React, { useState, useEffect } from 'react';

import { 
    DivImg, 
    DivOverlay,
    DivLoad, 
    DivImgMobile,
    DivOverlayMobile,
} from './styles';
import 'react-toastify/dist/ReactToastify.min.css';

import Desktop from '../../components/Desktop';
import Mobile from '../../components/Mobile';


import Loading from '../../components/Loading';
import _ from 'underscore';

import useViewport from '../../resources/responsive';
import { useSelector, useDispatch } from 'react-redux';
import { watchFilms } from '../../store/actions';

export default function Home() {
    const [loading, setLoading] = useState(true);

    const film = useSelector((state) => state.films, _.isEqual);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(watchFilms());
        film !== null ? setLoading(false) : setLoading(true);
        
    }, [dispatch, film]);
    

    const { width } = useViewport();
    const breakpoint = 800; 
    
    return (
        width > breakpoint ?
        <DivImg>
            <DivOverlay>
                { loading ?
                    <DivLoad>
                        <Loading
                            type="Oval"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </DivLoad>

                    :
                    
                    <Desktop />
                }
            </DivOverlay>
            
            
        </DivImg>
        
        :

        <DivImgMobile>
            <DivOverlayMobile>
                { loading ?
                    <DivLoad>
                        <Loading
                            type="Oval"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </DivLoad>

                    :
                    
                    <Mobile />
                }
            </DivOverlayMobile>
        </DivImgMobile>
    );
}