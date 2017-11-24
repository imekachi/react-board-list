import React from 'react'
import styled, { css } from 'styled-components'
import { COLORS } from '../../styles/colors'
import { numberFormat } from '../../util/format'
import { parsePercent } from '../../util/unitConverter'
import GhostButton, { ButtonGhostWrapper } from '../ButtonGhost'
import Icon from '../Icon'

const Wrapper = ButtonGhostWrapper.extend`
  padding-top: 15px;
`

const ActionButton = GhostButton.extend`
  font-size: 16px;
  color: ${COLORS.GRAY};
  width: ${parsePercent(1 / 3)};
`

const ButtonLike = ActionButton.extend`
  ${props => props.active && css`color: ${COLORS.RED}` }
`

const Value = styled.span`
  margin-left: 5px;
`

// TODO: make numbers in short form
const ActionBar = ({ likes, comments, shares }) => (
  <Wrapper className="_prevent-user-select">
    <ButtonLike title={`ชอบ ${numberFormat(likes)} ครั้ง`}>
      <Icon className="fa-heart-o" />
      {!!likes && (
        <Value>{numberFormat(likes)}</Value>
      )}
    </ButtonLike>
    <ActionButton title={`${numberFormat(comments)} คอมเมนต์`}>
      <Icon className="fa-comment-o" />
      {!!comments && (
        <Value>{numberFormat(comments)}</Value>
      )}
    </ActionButton>
    <ActionButton title={`แชร์ ${numberFormat(shares)} ครั้ง`}>
      <Icon className="fa-share" />
      {!!shares && (
        <Value>{numberFormat(shares)}</Value>
      )}
    </ActionButton>
  </Wrapper>
)

export default ActionBar