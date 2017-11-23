import React from 'react'
import styled from 'styled-components'

import TopicListItem from './TopicListItem'

const Wrapper = styled.div`

`

const ListBox = styled.div`

`

const ListItemWrapper = styled.div`

`

const TopicListBox = ({ topicList }) => {

  const topicItems = topicList.map((topic) => {
    return (
      <ListItemWrapper key={topic.id}>
        <TopicListItem topicData={topic} />
      </ListItemWrapper>
    )
  })

  return (
    <Wrapper>
      <ListBox>
        {topicItems}
      </ListBox>
    </Wrapper>
  )
}

export default TopicListBox