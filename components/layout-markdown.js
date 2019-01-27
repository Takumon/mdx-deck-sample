import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  text-align: left;
  align-items: center;
  flex-direction: row;
  font-size: 1.5rem;
  justify-content: center;
  position: relative;
`

const LayoutMarkdown = ({ children }) => <Wrapper>{children}</Wrapper>

export default LayoutMarkdown