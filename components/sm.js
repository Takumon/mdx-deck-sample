import React from 'react'
import styled from 'styled-components'

export default ({size = 0.6, children}) => {
    const Sm = styled.span`
        font-size: ${size}em;
        padding: 0 1.2rem
    `

    return <Sm>{children}</Sm>
}