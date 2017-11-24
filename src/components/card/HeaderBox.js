import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../styles/colors'
import { LINE_HEIGHTS } from '../../styles/fonts'
import { parsePixel } from '../../util/unitConverter'
import Icon from '../Icon'

const menuButtonSizes = {
  width: 55,
  paddingX: 20,
  paddingY: 12,
}

const Wrapper = styled.div`
  padding-right: ${parsePixel(menuButtonSizes.width - menuButtonSizes.paddingX)};
`

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
  display: inline;
  font-size: 14px;
  font-weight: bold;
  line-height: ${LINE_HEIGHTS.MD};
  color: ${COLORS.GRAY_DARK_2};
`

const PostOwner = styled.span`
  display: inline-block;
  vertical-align: text-bottom;
  white-space: nowrap;
  font-size: 14px;
  font-weight: normal;
  margin-left: 5px;
  color: ${COLORS.GRAY};
  overflow: hidden;
  max-width: 100%;
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