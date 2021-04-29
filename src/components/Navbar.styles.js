import styled, { css } from 'styled-components'

const linkMixing = css`
 text-decoration: none;
 font-weight: bold;
`
export const NavContainer = styled.nav`
    display:flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between
  }
`


export const Logo = styled.div`
    padding: 15px;
    color: #34325E;
    background-color: #FEF5EB;
    font-size: 24px;
    font-weight: bold;
    border-radius: 0 0 10px 10px;
    display:flex;
`

export const ButtonsContainer = styled.a`
    padding-top:15px;
    display: flex;
    justify-content: space-around;
    align-items: center;

`

export const RegisterLink = styled.a`
    color: #34325E;
    text-decoration: none;
    margin:1em;
    ${linkMixing}

`

export const CartLink = styled.a`
    color: #F39B34;
    text-decoration: none;
    display:flex;
    align-items: center;
    margin:1em;
    ${linkMixing}
`
