import React from 'react'
import styled from 'styled-components'
import ButtonFloating from '../components/ButtonFloating'
import Icon from '../components/Icon'

import TabPopular from '../components/TabPopular'
import TopicListBox from '../components/TopicListBox'

import img3809359 from '../images/mockup-3809359.jpg'
import img3809792 from '../images/mockup-3809792.jpg'
import img3809493 from '../images/mockup-3809493.jpg'

const AppWrapper = styled.div`

`

const topicList = [
  {
    id: 3809359,
    titleHtml: 'จากเว็บตูนของเกาหลี เมื่อรักสัมผัสไม่ได้ Untouchable Love สู่ซีรีย์จีน I Cannot Hug You',
    titleAttr: 'จากเว็บตูนของเกาหลี เมื่อรักสัมผัสไม่ได้ Untouchable Love สู่ซีรีย์จีน I Cannot Hug You',
    ownerAlias: 'miss.angelwitch',
    previewImageUrl: img3809359,
    previewText: 'นำเสนอต่อจากที่แนะนำซีรีย์ที่จะออกอากาศในเร็วนี้ปี2017 ซีรีย์จีนที่กำลังจะออกอากาศเร็วๆนี้(2017) น่าดูมาก!',
    likes: 7,
    comments: 12,
    shares: 25,
  },
  {
    id: 3809792,
    titleHtml: 'ส่องคุณครู มช60 มันดีมากเว้ยย (รูปเยอะ)',
    titleAttr: 'ส่องคุณครู มช60 มันดีมากเว้ยย (รูปเยอะ)',
    ownerAlias: 'girlsloke11',
    previewImageUrl: img3809792,
    previewText: 'เหล่าว่าที่คุณครูในอนาคต นักศึกษาคณะศึกษาศาสตร์ปี60 มหาวิทยาลัยเชียงใหม่ บอกเลยว่าน่ารักมากๆ พูดเลยว่า ครูไปสอน',
    likes: 28,
    comments: 1,
    shares: 1611,
  },
  {
    id: 3809038,
    titleHtml: 'มาแล้ว! รายชื่อสนามสอบ และจังหวัด/อำเภอที่เปิดสนามสอบ #GATPAT 61',
    titleAttr: 'มาแล้ว! รายชื่อสนามสอบ และจังหวัด/อำเภอที่เปิดสนามสอบ #GATPAT 61',
    ownerAlias: 'พี่ลาเต้',
    previewText: 'สนามสอบในเขตพื้นที่กรุงเทพมหานคร ปทุมธานี และนนทบุรี คลิกที่นี่\n' +
    'จังหวัดและอำเภอที่จะเปิดสนามสอบ GAT และ PAT 61 คลิกที่นี่',
    likes: 69,
    comments: 51,
    shares: 3774,
  },
  {
    id: 3809493,
    titleHtml: 'รีวิวแฟมิลี่มาร์ทสไตล์ญี่ปุ่น สาขาสุขุมวิท 33 เอาใจคนเมือง กับโซน Co-working Space!',
    titleAttr: 'รีวิวแฟมิลี่มาร์ทสไตล์ญี่ปุ่น สาขาสุขุมวิท 33 เอาใจคนเมือง กับโซน Co-working Space!',
    ownerAlias: 'UncleBear',
    previewImageUrl: img3809493,
    previewText: 'หลังจากแฟมิลี่มาร์ทปรับโฉมสาขาฮอลิเดย์อินน์ใหม่ให้เป็นสไตล์ญี่ปุ่น แตกต่างจากร้านสะดวกซื้อทั่วไปเมื่อช่วงกลางปี',
    likes: 12,
    comments: 4,
    shares: 1659,
  },
]

export default class BoardListApp extends React.Component {
  render() {
    return (
      <AppWrapper>
        <TabPopular />
        <TopicListBox topicList={topicList} withAvatar={false}/>

        <ButtonFloating className="_layer-z-1" title="ตั้งกระทู้">
          <Icon className="fa-pencil" />
        </ButtonFloating>
      </AppWrapper>
    )
  }
}