import styled from 'styled-components'
import { query } from 'atomic-layout'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  margin: 16px 16px 16px 0;
  padding: 0 8px;
  width: 100%;
  font-weight: 600;
  > svg {
    display: none;
    font-size: 28px;
    color: ${props => props.theme.colors.green};
  }
  > input {
    flex: 1;
    height: 70px;
    background: transparent;
    border: 0;
    background: ${props => props.theme.colors.white};
    font-size: 20px;
    color: ${props => props.theme.colors.gray};
    transition: all 0.5s;
    &::placeholder {
      color: ${props => props.theme.colors.gray};
    }
    &:focus {
      opacity: 0;
      margin-left: 80px;
    }
  }
  @media ${query({ to: 'md' })} {
    > svg {
      display: flex;
    }
  }
`
