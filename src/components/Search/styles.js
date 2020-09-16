import styled from 'styled-components'
import { query } from 'atomic-layout'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 1140px;
  height: 300px;

  margin-top: 120px;

  span {
    color: ${props => props.theme.colors.orange};
    font-size: 34px;
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 16px;

    button {
      width: 160px;
      height: 70px;
      border-radius: 8px;
      margin: 16px 0 16px 16px;
      font-size: 16px;
      font-weight: 600;
      background-color: ${props => props.theme.colors.green};
      color: ${props => props.theme.colors.white};
    }
  }

  @media ${query({ to: 'xl' })} {
    width: 950px;
  }

  @media ${query({ to: 'lg' })} {
    width: 680px;
  }

  @media ${query({ to: 'md' })} {
    align-items: center;
    width: 100%;
    background-color: ${props => props.theme.colors.secondary};
    height: 200px;
    padding: 0 16px;
    span {
      font-size: 20px;
      max-width: 280px;
    }
    input {
      width: 100%;
    }
    button {
      display: none;
    }
  }
`
