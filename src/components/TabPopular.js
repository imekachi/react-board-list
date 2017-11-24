import React from 'react'
import styled, { css } from 'styled-components'

import { COLORS } from '../styles/colors'
import { FONT_FAMILIES } from '../styles/fonts'

const Wrapper = styled.nav`
  display: table;
  width: 100%;
  border: solid ${COLORS.GRAY_LIGHT_2};
  border-width: 1px 0;
  background-color: #FFFFFF;
  box-shadow: 0 3px 8px -4px rgba(0,0,0,0.3);
`

const activeTabButtonStyle = css`
  color: ${COLORS.ORANGE_THEME};
  border-bottom: 3px solid ${COLORS.ORANGE_THEME};
`

const TabButtonStyle = styled.a`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  
  font-family: ${FONT_FAMILIES.SUKHUMVIT};
  font-size: 21px;
  font-weight: 100;
  line-height: 1;
  color: ${COLORS.GRAY_DARK_2};
  
  width: ${100 / 3}%;
  height: 50px;
  cursor: pointer;
  
  ${props => props.active && activeTabButtonStyle}
`

const FontCompensate = styled.span`
  display: inline-block;
  vertical-align: middle;
  transform: translateY(2px); // compensate font floating
`

const TabButton = ({ children, ...passedProps }) => (
  <TabButtonStyle {...passedProps}>
    <FontCompensate>{children}</FontCompensate>
  </TabButtonStyle>
)

const TabPopular = () => (
  <Wrapper>
    <TabButton active title="กระทู้สุดฮ็อต">ฮ็อต</TabButton>
    <TabButton title="กระทู้ติดเทรนด์">มาแรง</TabButton>
    <TabButton title="กระทู้ใหม่ล่าสุด">สดใหม่</TabButton>
  </Wrapper>
)

export default TabPopular