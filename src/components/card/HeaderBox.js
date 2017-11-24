import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../styles/colors'
import { LINE_HEIGHTS } from '../../styles/fonts'
import { parsePixel } from '../../util/unitConverter'
import Icon from '../Icon'

const Wrapper = styled.div`
  
`

const menuButtonSizes = {
  width: 40,
  paddingX: 12,
  paddingY: 12,
}

const MenuButton = styled.div`
  font-size: 24px;
  color: ${COLORS.GRAY};
  line-height: 1;
  width: ${parsePixel(menuButtonSizes.width)};
  padding: ${parsePixel(menuButtonSizes.paddingY)} ${parsePixel(menuButtonSizes.paddingX)};
  
  position: absolute;
  top: 0;
  right: 0;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  line-height: ${LINE_HEIGHTS.SM};
  color: ${COLORS.GRAY_DARK_2};
  padding-right: ${parsePixel(menuButtonSizes.width - menuButtonSizes.paddingX)};
`

const PostOwner = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: ${COLORS.GRAY};
`

const HeaderBox = ({ titleAttr, titleHtml, ownerAlias, menuIcon = 'fa-angle-down' }) => (
  <Wrapper>
    <MenuButton title="เมนู">
      <Icon className={menuIcon} />
    </MenuButton>
    <Title title={titleAttr}>{titleHtml}</Title>
    <PostOwner>- {ownerAlias}</PostOwner>
  </Wrapper>
)

export default HeaderBox