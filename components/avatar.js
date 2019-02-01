import React from 'react'
import styled from 'styled-components'

const IMG = styled.img`
    border-radius: 50%;
    float: left;
    display: block;

    width: 3.5rem;
    height: 3.5rem;
    margin: 0.3rem;
    @media screen and (min-width:480px) and (min-height: 400px) {
        width: 6rem;
        height: 6rem;
        margin: 0.7rem;
    }
    @media screen and (min-width:640px) and (min-height: 500px) {
        width: 9rem;
        height: 9rem;
        margin: 0.8rem;
    }
    @media screen and (min-width:1020px) and (min-height: 830px) {
        width: 13rem;
        height: 13rem;
        margin: 1rem;
    }
`


const Avatar = ({ src, opacity = 1}) => {
    return (<IMG
        src="./images/avater.jpg"
        alt="たくもんのアイコン"
    />)
}

export default Avatar

