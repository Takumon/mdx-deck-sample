import React from 'react'
import styled from 'styled-components'

export default class Counter extends React.Component {
  state = {
    count: 0
  }

  inc = () => {
    this.setState(state => ({count: state.count + 1}))
  }

  dec = () => {
    this.setState(state => ({count: state.count - 1}))
  }

  render() {

    const Wrapper = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1b1b1b;
      border-radius: 4px;
      border: 1px solid white;
      padding: 2rem;
    `

    const Btn = styled.div`
      appearance: none;
      font-family: inherit;
      font-size: inherit;
      font-weight: bold;
      border-radius: 4px;
      border: none;
      width: 2em;
      cursor: pointer;
      border: 1px solid white;
    `
    const Count = styled.div`
      margin: 1rem;
    `

    return (
      <Wrapper>
        <Btn ml='auto' onClick={this.dec}>-</Btn>
        <Count>{this.state.count}</Count>
        <Btn ml='auto' onClick={this.inc}>+</Btn>
      </Wrapper>
    )
  }
}