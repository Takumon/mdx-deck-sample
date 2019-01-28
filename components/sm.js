import React from 'react'
import styled from 'styled-components'

export default ({size = '0.6em', padding = '0 1.2rem', children}) => {
    const Sm = styled.span`
        font-size: ${size};
        padding: ${padding};
    `

    return <Sm>{children}</Sm>
}