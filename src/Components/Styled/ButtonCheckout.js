import styled from 'styled-components'

export const ButtonCheckout = styled.button`
    display: block;
    width: 250px;
    height: 65px;
    background: #299b01;
    font-weight: 400;
    font-size: 21px;
    line-height: 1;
    color: #ffffff;
    transition: 0.3s;
    margin: 0 auto;

    &:hover {
        background: #217a02;
    }

    &:disabled {
        color: #bbb;
        background: #ccc;
    }
`
