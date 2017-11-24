import React from 'react'
import styled from 'styled-components'

import HeaderBox from './card/HeaderBox'
import ActionBar from './card/ActionBar'
import { bgImage } from '../util/styles'
import { FONT_FAMILIES, LINE_HEIGHTS } from '../styles/fonts'
import { COLORS } from '../styles/colors'
import { withRatioOG } from '../styles/sizes'

const Card = styled.article`
  position: relative;
  display: block;
  padding: 15px 12px;
  background-color: ${props => props.bg || '#FFFFFF'};
  font-family: ${FONT_FAMILIES.TAHOMA};
  color: ${COLORS.GRAY_DARK_2};
  transition: background-color 200ms;
  
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
  line-height: ${LINE_HEIGHTS.SM};
`

const PreviewImage = styled.div`
  display: block;
  margin-top: 15px;
  border-radius: 5px;
  
  ${withRatioOG}
  ${props => props.src && bgImage(props.src, 'cover')}
`

const TopicListItem = ({ topicData, withPreviewText = true, withPreviewImage = true, withActions }) => {
  const { titleAttr, titleHtml, ownerAlias, likes, comments, shares, previewText, previewImageUrl } = topicData

  withPreviewText = withPreviewText && !!previewText
  withPreviewImage = withPreviewImage && !!previewImageUrl

  return (
    <Card>
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
            {previewText}
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
    </Card>
  )
}

export default TopicListItem