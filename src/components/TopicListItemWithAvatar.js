import React from 'react'
import styled from 'styled-components'

import HeaderBox from './card/HeaderBox'
import ActionBar from './card/ActionBar'
import { bgImage } from '../util/styles'
import { FONT_FAMILIES, LINE_HEIGHTS } from '../styles/fonts'
import { COLORS } from '../styles/colors'
import { withRatioOG } from '../styles/sizes'
import { CHAR } from '../constants/characters'

const Card = styled.article`
  position: relative;
  display: block;
  padding: 15px 12px;
  border-bottom: 1px solid ${COLORS.GRAY_LIGHT_2};
  background-color: ${props => props.bg || '#FFFFFF'};
  transition: background-color 200ms;

  font-family: ${FONT_FAMILIES.TAHOMA};
  color: ${COLORS.GRAY_DARK_2};
  
  &:active {
    background-color: #FFF3E8;
  }
`

const ContentBox = styled.div`

`

const PreviewText = styled.div`
  display: block;
  margin-top: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: ${LINE_HEIGHTS.MD};
`

const PreviewImage = styled.div`
  display: block;
  margin-top: 15px;
  border-radius: 5px;
  
  ${withRatioOG}
  ${props => props.src && bgImage(props.src, 'cover')}
`

const AvatarWrapper = styled.div`
  padding-right: 10px;
`

const Avatar = styled.div`
  display: block;
  border-radius: 50%;
  width: 44px;
  overflow: hidden;
  height: 0;
  padding-bottom: 100%;
  ${props => props.src && bgImage(props.src, 'cover')}
`

const TopicListItemWithAvatar = ({ topicData, withPreviewText = true, withPreviewImage = true, withActions = true }) => {
  const { titleAttr, titleHtml, ownerAlias, likes, comments, shares, previewText, previewImageUrl } = topicData

  withPreviewText = withPreviewText && !!previewText
  withPreviewImage = withPreviewImage && !!previewImageUrl

  return (
    <Card className="table-cell-wrapper -vertical-top">
      <AvatarWrapper className="table-cell">
        <Avatar src="https://image.dek-d.com/1/toon/w984655.gif"/>
      </AvatarWrapper>
      <div className="table-cell">
        <HeaderBox
          {...{
            titleAttr,
            titleHtml,
            ownerAlias,
          }}
        />

        <ContentBox>
          {withPreviewText && (
            <PreviewText>
              {previewText}{CHAR.ELLIPSIS}
            </PreviewText>
          )}

          {withPreviewImage && (
            <PreviewImage src={previewImageUrl}/>
          )}
        </ContentBox>

        {withActions && (
          <ActionBar
            {...{
              likes,
              comments,
              shares,
            }}
          />
        )}
      </div>
    </Card>
  )
}

export default TopicListItemWithAvatar