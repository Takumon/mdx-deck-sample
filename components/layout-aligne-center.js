import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  position: relative;

  pre {
    max-width: 90vw;
    max-height: 80vh;
    font-size: 0.5rem;

    @media screen and (min-width:480px) and (min-height: 400px) {
      font-size: 0.8rem;
    }
    @media screen and (min-width:640px) and (min-height: 500px) {
      font-size: 1rem;
    }
    @media screen and (min-width:1020px) and (min-height: 830px) {
      font-size: 1.8rem;
    }
  }
`

const LayoutAlignCenter = ({ children }) => <Wrapper>{children}</Wrapper>

export default LayoutAlignCenter