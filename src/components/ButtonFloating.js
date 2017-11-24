import styled from 'styled-components'
import { COLORS } from '../styles/colors'

const ButtonFloating = styled.a`
  display: inline-block;
  width: 53px;
  height: 53px;
  padding: 15px 10px;
  border-radius: 50%;
  background-color: ${COLORS.ORANGE_THEME};
  cursor: pointer;
  
  font-size: 21px;
  line-height: 1;
  color: #FFFFFF;
  text-align: center;
  
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 101;
  
  transition: background-color 200ms;
  
  &:active {
    background-color: ${COLORS.ORANGE_THEME_LIGHT};
  }
`

export default ButtonFloating
