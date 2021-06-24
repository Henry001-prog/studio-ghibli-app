import React from 'react';

import { DivImage, Img } from './styles';

export default function Image({ src }) {

    return (
        <DivImage>
            <Img src={src} />
        </DivImage>
    );
}