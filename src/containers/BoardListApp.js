import React from 'react'
import styled from 'styled-components'

import TabPopular from '../components/TabPopular'
import TopicListBox from '../components/TopicListBox'
import { COLORS } from '../styles/colors'
import Icon from '../components/Icon'

const AppWrapper = styled.div`

`

const topicList = [
  {
    id: 224798,
    titleHtml: 'จากเว็บตูนของเกาหลี เมื่อรักสัมผัสไม่ได้ Untouchable Love สู่ซีรีย์จีน I Cannot Hug You',
    titleAttr: 'จากเว็บตูนของเกาหลี เมื่อรักสัมผัสไม่ได้ Untouchable Loveสู่ซีรีย์จีน I Cannot Hug You',
    ownerAlias: 'miss.angelwitch',
    previewImageUrl: 'https://image.dek-d.com/1/bicon/0380/3809359_5a157325d7558_big.jpg',
    previewText: 'นำเสนอต่อจากที่แนะนำซีรีย์ที่จะออกอากาศในเร็วนี้ปี2017 ซีรีย์จีนที่กำลังจะออกอากาศเร็วๆนี้(2017) น่าดูมาก!',
    like: 7,
    comment: 12,
    share: 25,
  }
]

const FloatingNewTopicButton = styled.a`
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
`

export default class BoardListApp extends React.Component {
  render() {
    return (
      <AppWrapper>
        <TabPopular />
        <TopicListBox topicList={topicList} />

        <FloatingNewTopicButton className="_layer-z-1">
          <Icon className="fa-pencil" />
        </FloatingNewTopicButton>
      </AppWrapper>
    )
  }
}