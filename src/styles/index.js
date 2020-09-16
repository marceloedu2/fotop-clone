import styled from 'styled-components'
import { query } from 'atomic-layout'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 1200px;
`
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  border-top: 5px solid ${props => props.theme.colors.orange};

  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${query({ to: 'md' })} {
    background-image: none;
  }
`

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 1140px;
  margin: auto;
  > span {
    color: ${props => props.theme.colors.secondary};
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
    margin-bottom: 30px;
    &:before {
      content: '';
      display: block;
      height: 8px;
      width: 40px;
      margin-top: 71px;
      margin-bottom: 26px;
      background-color: ${props => props.theme.colors.gray};
    }
    @media ${query({ to: 'md' })} {
      padding: 0 8px;
      font-size: 24px;
      margin-bottom: 16px;
      &:before {
        width: 25px;
        height: 5px;
      }
    }
  }

  @media ${query({ to: 'xl' })} {
    width: 950px;
  }

  @media ${query({ to: 'lg' })} {
    width: 680px;
  }

  @media ${query({ to: 'md' })} {
    width: 500px;
  }

  @media ${query({ to: 'sm' })} {
    width: 100%;
    padding: 0 8px;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin-top: 28px;
  @media ${query({ to: 'md' })} {
    margin-top: 0;
  }
`
