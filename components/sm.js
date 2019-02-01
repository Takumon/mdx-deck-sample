import React from 'react'
import styled from 'styled-components'

export default ({size = '0.6em', children}) => {
    const Sm = styled.span`
        font-size: ${size};
        padding: 0 0.3rem;

        @media screen and (min-width:480px) and (min-height: 400px) {
            padding: 0 0.5rem;
        }
        @media screen and (min-width:640px) and (min-height: 500px) {
            padding: 0 0.7rem;
        }
        @media screen and (min-width:1020px) and (min-height: 830px) {
            padding: 0 1.2rem;
        }

    `

    return <Sm>{children}</Sm>
}