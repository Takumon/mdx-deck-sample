import React from 'react'

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
    return (
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1b1b1b',
        borderRadius: '4px',
        border: '1px solid white',
        padding: '2rem',
        }}>
        <div style={{
            appearance: 'none',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'bold',
            borderRadius: '4px',
            border: 'none',
            width: '2em',
            cursor: 'pointer',
            border: '1px solid white',
        }} ml='auto' onClick={this.dec}>-</div>
        <div style={{
            margin: '1rem'
        }}>{this.state.count}</div>
        <div style={{
            appearance: 'none',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            fontWeight: 'bold',
            borderRadius: '4px',
            border: 'none',
            width: '2em',
            cursor: 'pointer',
            border: '1px solid white',
        }} mr='auto' onClick={this.inc}>+</div>
      </div>
    )
  }
}