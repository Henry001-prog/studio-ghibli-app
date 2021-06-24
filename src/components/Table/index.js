/*import React, { useState, useEffect } from 'react';

import { 
    DivImg, 
    DivLoad, 
    Div, 
    DivTable, 
    Table, 
    Tr, 
    Th, 
    Td, 
    Button 
} from './styles';
import Image from '../Image';
import Container from '../Container';

import poster from '../../utils/Constants';

import Loader from "react-loader-spinner";

import api from '../../services/api';
import history from '../../History';

export default function Home({ setToken }) {
    const [data, setData] = useState({});
    const [data2, setData2] = useState({});
    const [loading, setLoading] = useState(true);
    //console.log('dados:', data)

    useEffect(() =>{
        async function loadData() {
            try {
                const response = await api.get(`/films`);
                //console.log('dados:', response.data);
                const films = response.data;
                console.log('dados2:', films);
                setData(films);
                setLoading(false);
            } catch(error) {
                alert("Não foi possível carregar os dados!");
                setLoading(false);
                return;
            }
        }
        loadData();
    }, []);
    
    function nextPage() {
        setToken('pass123');
        history.push({pathname: 'filmdetail', state: { film: {...data, poster} }});
    }

    /*const images = poster.map(image => {
        return <Image key={image} src={import(`../../utils/Constants/poster`)} />
     });*/

    /*return (
        <DivImg>
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
                    
                    {data.map((item, index) => (
                        <DivTable>
                            <Button onClick={() => {nextPage()}}>
                                <Table>
                                    <Tr>
                                    <Image src={poster[index].img} />
                                    
                                        
                                        <Th style={{}}>Title</Th>
                                        
                                        
                                        <Th style={{}}>Release Date</Th> 
                                        <Th style={{}}>Score</Th>
                                    </Tr>
                                    
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
                                </Table>
                            </Button>
                        </DivTable>
                    ))}
                </Div>
            }
            
        </DivImg>
        
    );
}*/