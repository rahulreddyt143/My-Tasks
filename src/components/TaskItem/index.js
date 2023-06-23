import {TaskListItem, TaskDescription, TagDescription} from './styledComponents'

const TaskItem = props => {
  const {taskDetails} = props
  const {task, tagText} = taskDetails

  return (
    <TaskListItem>
      <TaskDescription>{task}</TaskDescription>
      <TagDescription>{tagText}</TagDescription>
    </TaskListItem>
  )
}

export default TaskItem
