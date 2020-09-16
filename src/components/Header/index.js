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
      <a href="#">
        <FotopLogoWhite />
        <FotopLogo />
      </a>
      <LinksContent dropdown={dropDown}>
        <MobileIcons>
          <a>
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
            <a href="https://fotop.io/">SOU FOTÓGRAFO</a>
          </li>
          <li>
            <a href="https://servicos.fotop.com.br/">SERVIÇOS</a>
          </li>
          <li>
            <a href="https://fotop.com.br/fotos/login">LOGIN</a>
          </li>
          <li>
            <span>
              AJUDA
              <FiChevronDown />
            </span>
            <UlLinkBalloon>
              <li>
                <a href="https://fotop.com.br/fotos/login?url=/fotos/meuspedidos/consulta/id/">
                  BAIXAR FOTOS DE UM PEDIDO
                </a>
              </li>
              <li>
                <a href="https://ajuda.fotop.com.br/kb/pt-br/article/61416/como-comprar">
                  COMO COMPRAR FOTOS
                </a>
              </li>
              <li>
                <a href="https://ajuda.fotop.com.br/kb">CENTRAL DE AJUDA</a>
              </li>
              <li>
                <a href="https://ajuda.fotop.com.br/kb/pt-br/form/1812">
                  CONTATE-NOS
                </a>
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
