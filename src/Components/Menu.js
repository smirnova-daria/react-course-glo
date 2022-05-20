import React from 'react'
import styled from 'styled-components'
import dbMenu from './DBMenu'
import { ListItem } from './ListItem'
import banner from '../image/banner.png'

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 79px;
`

const SectionMenu = styled.section`
    padding: 30px;
`
const Banner = styled.div`
    background-image: ${({ img }) => `url(${img})`};
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 210px;
`

export const Menu = (props) => (
    <MenuStyled>
        <Banner img={banner} />
        <SectionMenu>
            <h2>Бургеры</h2>
            <ListItem itemList={dbMenu.burger} />
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem itemList={dbMenu.other} />
        </SectionMenu>
    </MenuStyled>
)