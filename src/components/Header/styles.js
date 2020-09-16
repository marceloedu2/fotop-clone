import styled, { css } from 'styled-components'
import { query } from 'atomic-layout'

export const HeaderContainer = styled.div`
  width: 1140px;
  height: 130px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 9999;
  > svg + svg {
    display: none;
  }

  @media ${query({ to: 'xl' })} {
    width: 950px;
  }

  @media ${query({ to: 'lg' })} {
    width: 680px;
  }

  @media ${query({ to: 'md' })} {
    width: 500px;
    height: 80px;

    position: relative;
    > svg {
      display: none;
    }
    > svg + svg {
      display: flex;
      width: 120px;
    }
  }

  @media ${query({ to: 'sm' })} {
    width: 100%;
    padding: 0 16px;
  }
`

export const UlLinkBalloon = styled.ul`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  right: 0;
  flex-direction: column;
  margin-top: 20px;

  background-color: ${props => props.theme.colors.white};
  border-top: 5px solid ${props => props.theme.colors.orange};

  transition: all 0.5s;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    padding: 16px 24px;

    color: #373737;
    font-size: 13px;
    font-weight: 600;
    border-bottom: 1.5px solid ${props => props.theme.colors.grey};

    a {
      width: 100%;
    }

    &:hover {
      background-color: ${props => props.theme.colors.light};
    }
    &:after {
      content: '';
      position: absolute;
      border-style: solid;
      border-width: 0 8px 8px;
      border-color: ${props => props.theme.colors.orange} transparent;
      display: block;
      width: 0;
      z-index: 1;
      top: -12px;
      left: 215px;
    }
    ${props =>
      props.ulCenter &&
      css`
        padding: 8px 24px;
        &:after {
          left: 30px;
        }
      `}
  }
  @media ${query({ to: 'md' })} {
    display: flex;
  }
`

export const LinksContent = styled.div`
  color: ${props => props.theme.colors.white};
  font-size: 15px;
  font-weight: 600;
  padding: 0 0 0 60px;
  > ul {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
    > li {
      white-space: nowrap;
      padding: 16px 8px;
      border-radius: 4px;
      border: 1px solid transparent;

      position: relative;

      cursor: pointer;

      &:hover {
        color: ${props => props.theme.colors.orange};
      }

      &:active,
      &:focus {
        border: 1px solid ${props => props.theme.colors.white};
      }

      &:hover {
        ${UlLinkBalloon} {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
  @media ${query({ to: 'md' })} {
  overflow: hidden;
  > ul {
    width: 100%;

    flex-direction: column;
    position: absolute;
    top: 79px;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.grey};

    opacity: 0;
    transform: translateY(-400px);
    transition: all .3s, opacity 0.8s;

    > li {
      border-bottom: 1px solid ${props => props.theme.colors.grey};
      > a {
        color: ${props => props.theme.colors.orange};
      }
      > span {
        color: ${props => props.theme.colors.orange};
        svg {
          display: none;
        }
      }
      ${UlLinkBalloon} {
        display: none !important;
      }
    }
  }
  > button {
    display: flex;
  }
  ${props =>
    props.dropdown &&
    css`
      ul {
        transform: translateY(0);
        opacity: 1;
      }
    `}
`

export const MobileIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  > a {
    display: none;
    background-color: transparent;
    margin-right: 80px;

    > svg {
      color: ${props => props.theme.colors.orange};
      font-size: 28px;
    }
  }
  > button {
    display: none;
    background-color: transparent;
    > svg {
      color: ${props => props.theme.colors.orange};
      font-size: 28px;
    }
  }

  @media ${query({ to: 'md' })} {
    > a {
      display: flex;
    }
    > button {
      display: flex;
    }
  }
`
