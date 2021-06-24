import React from 'react';
import { DivLoad } from './styles';
import Loader from "react-loader-spinner";

export default function Loading() {
    return(
        <DivLoad>
            <Loader
                type="Oval"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </DivLoad>
    );
}