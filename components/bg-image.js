import React from 'react'
import styled from 'styled-components'

const IMG = styled.img`
  width: 99vw;
  position: absolute;
  left: 0;
  z-index: -1;
  top: 50%;
  transform: translateY(-50%);
`
const BGImage = ({ src, opacity = 1}) => {
    const BG = styled(IMG)`
        opacity: ${opacity}
    `

    return <BG src={src} />
}

export default BGImage