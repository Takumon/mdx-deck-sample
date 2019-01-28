import React from 'react'
import styled from 'styled-components'






const IFRAME = ({ src, height = '97vh', width = '100vw'}) => {
    const IframeElement = styled.iframe`
        max-width: ${width};
        max-height: ${height};
        margin-left: -50vw;
        position: absolute;
        top: 0;
        background: white;
    `


    return <IframeElement src={src} ></IframeElement>
}

export default IFRAME



