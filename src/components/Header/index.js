import React, { useState } from 'react'

import {
  HeaderContainer,
  LinksContent,
  UlLinkBalloon,
  MobileIcons
} from '@/components/Header/styles'

import FotopLogoWhite from '@/assets/logo-fotop-branco.svg'
import FotopLogo from '@/assets/logo-fotop.svg'
import { FiChevronDown, FiAlignJustify, FiShoppingCart } from 'react-icons/fi'

const Header = () => {
  const [dropDown, setDropDown] = useState(false)
  return (
    <HeaderContainer>
      <FotopLogoWhite />
      <FotopLogo />
      <LinksContent dropdown={dropDown}>
        <MobileIcons>
          <a href="#">
            <FiShoppingCart />
          </a>
          <button onClick={() => setDropDown(!dropDown)}>
            <FiAlignJustify />
          </button>
        </MobileIcons>
        <ul>
          <li>
            <a href="#">BAIXAR FOTOS</a>
          </li>
          <li>
            <a href="#">SOU FOTÓGRAFO</a>
          </li>
          <li>
            <a href="#">SERVIÇOS</a>
          </li>
          <li>
            <a href="#">LOGIN</a>
          </li>
          <li>
            <span>
              AJUDA
              <FiChevronDown />
            </span>
            <UlLinkBalloon>
              <li>
                <a href="#">BAIXAR FOTOS DE UM PEDIDO</a>
              </li>
              <li>
                <a href="#">COMO COMPRAR FOTOS</a>
              </li>
              <li>
                <a href="#">CENTRAL DE AJUDA</a>
              </li>
              <li>
                <a href="#">CONTATE-NOS</a>
              </li>
            </UlLinkBalloon>
          </li>
          <li>
            <span>
              BR
              <FiChevronDown />
            </span>
            <UlLinkBalloon ulCenter>
              <li>
                <a href="#">US</a>
              </li>
              <li>
                <a href="#">ES</a>
              </li>
              <li>
                <a href="#">FR</a>
              </li>
              <li>
                <a href="#">PT</a>
              </li>
            </UlLinkBalloon>
          </li>
        </ul>
      </LinksContent>
    </HeaderContainer>
  )
}

export default Header
