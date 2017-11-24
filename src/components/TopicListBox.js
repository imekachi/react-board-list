import React from 'react'
import styled from 'styled-components'

import TopicListItem from './TopicListItem'
import TopicListItemWithAvatar from './TopicListItemWithAvatar'

const Wrapper = styled.div`
  background-color: #FFFFFF;
  padding-bottom: 120px;
`

const ListBox = styled.div`

`

const ListItemWrapper = styled.div`

`

const TopicListBox = ({ topicList, withAvatar = false }) => {

  const topicItems = topicList.map((topic) => {
    return (
      <ListItemWrapper key={topic.id}>
        {withAvatar
        ? <TopicListItemWithAvatar topicData={topic} />
        : <TopicListItem topicData={topic} />
        }
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