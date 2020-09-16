import styled from 'styled-components'
import { query } from 'atomic-layout'

export const CardContent = styled.a`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 350px;
  min-width: 350px;
  height: 250px;

  margin-bottom: 44px;
  border-radius: 8px;

  background-image: url(${props => props.image});
  background-size: cover;
  cursor: pointer;
  > div {
    transform: translateX(-30px);
    transition: all 0.5s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    > span {
      font-size: 28px;
      font-weight: 900;
      letter-spacing: 3px;
      color: ${props => props.theme.colors.white};

      cursor: pointer;
    }
    > svg {
      opacity: 0;
      font-size: 62px;
      font-weight: 900;
      margin-top: 6px;
      color: ${props => props.theme.colors.white};
    }
  }

  &:hover {
    > div {
      transform: translateX(0);
      > span {
        color: ${props => props.theme.colors.orange};
      }
      > svg {
        opacity: 1;
        color: ${props => props.theme.colors.orange};
      }
    }
  }

  @media ${query({ to: 'lg' })} {
    max-width: 300px;
    min-width: 300px;
    > div {
      > span {
        font-size: 24px;
      }
      > svg {
        opacity: 0;
        margin-top: 1px;
        font-size: 42px;
      }
    }
  }

  @media ${query({ to: 'md' })} {
    max-width: 238px;
    min-width: 238px;
    height: 150px;
    margin-bottom: 25px;
    > div {
      transform: translateX(0);
      margin-right: 0;
      &:hover {
        transform: translateX(0);
      }
      > span {
        font-size: 18px;
      }
      > svg {
        opacity: 0;
        margin-top: 1px;
        font-size: 28px;
      }
    }
  }

  @media ${query({ to: 'sm' })} {
    max-width: 45%;
    min-width: 45%;
    height: 130px;
    margin: 0 8px 25px 8px;
    > div {
      transform: translateX(0);
      margin-right: 0;
      &:hover {
        transform: translateX(0);
      }
      > span {
        font-size: 16px;
      }
      > svg {
        margin-top: 1px;
        font-size: 28px;
      }
    }
  }
`
