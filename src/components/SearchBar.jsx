import React, { Component } from 'react'
import styled from 'styled-components'
import icon from '../images/search.png'

const SearchContainer = styled.div`


`
const SearchInput = styled.input`
height: 50px;
width: 300px;
background: url(${icon}) no-repeat right ;
border: 2px solid #F39B34;
box-sizing: border-box;
border-radius: 36px;
`
export class SearchBar extends Component {
    render() {
        return (
            <SearchContainer>
                <SearchInput type="search" ></SearchInput>
            </SearchContainer>
        )
    }
}

export default SearchBar;