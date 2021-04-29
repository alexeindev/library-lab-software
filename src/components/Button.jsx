import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 10px;
    background-color:  ${props => (props.light ? '#ffffff' : '#F39B34') };
    color: ${props => (props.light ? '#F39B34' : '#ffffff') } ;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    line-height: 28px;
    border-radius: 50px;
    border: 1px #F39B34 solid;

`


const Button = ({light, children}) => {
    return <StyledButton light={light}>{children}</StyledButton>
}

export default Button