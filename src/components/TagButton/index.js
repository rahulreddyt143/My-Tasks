import {TagItem, Button} from './styledComponents'

const TagButton = props => {
  const {tagDetails, onClickActiveTag} = props
  const {displayText, optionId} = tagDetails

  const onClickTag = () => {
    onClickActiveTag(optionId)
  }

  return (
    <TagItem>
      <Button type="button" onClick={onClickTag}>
        {displayText}
      </Button>
    </TagItem>
  )
}

export default TagButton
