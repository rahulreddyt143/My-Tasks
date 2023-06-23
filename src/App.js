import {Component} from 'react'
import {v4} from 'uuid'

import './App.css'
import TagButton from './components/TagButton'
import TaskItem from './components/TaskItem'
import {
  BgContainer,
  LeftContainer,
  Title,
  LabelElement,
  InputElement,
  InputContainer,
  SelectElement,
  OptionElement,
  AddTaskButton,
  RightContainer,
  Heading,
  TagButtonsContainer,
  TasksContainer,
  NoTasksContainer,
  NoTasksDescription,
} from './styledComponents'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    taskInput: '',
    currentTag: tagsList[0].optionId,
    taskList: [],
    activeTag: null,
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeTag = event => {
    this.setState({currentTag: event.target.value})
  }

  onTaskSubmit = event => {
    event.preventDefault()
    const {taskInput, currentTag} = this.state
    const filteredTag = tagsList.filter(
      eachTag => eachTag.optionId === currentTag,
    )
    const newTask = {
      id: v4(),
      task: taskInput,
      tag: currentTag,
      tagText: filteredTag[0].displayText,
    }
    this.setState(prevState => ({
      taskInput: '',
      currentTag: tagsList[0].displayText,
      taskList: [...prevState.taskList, newTask],
    }))
  }

  onClickActiveTag = displayText => {
    this.setState({activeTag: displayText})
  }

  getFilteredTaskList = () => {
    const {activeTag, taskList} = this.state
    if (activeTag === null) {
      return taskList
    }
    const filteredList = taskList.filter(eachTask => eachTask.tag === activeTag)
    return filteredList
  }

  render() {
    const {taskInput, currentTag} = this.state
    const filteredTaskList = this.getFilteredTaskList()

    return (
      <BgContainer>
        <LeftContainer onSubmit={this.onTaskSubmit}>
          <Title>Create a task!</Title>
          <InputContainer>
            <LabelElement htmlFor="TASK">Task</LabelElement>
            <InputElement
              placeholder="Enter the task here"
              type="text"
              id="TASK"
              onChange={this.onChangeTaskInput}
              value={taskInput}
            />
          </InputContainer>
          <InputContainer>
            <LabelElement htmlFor="TAG">Tags</LabelElement>
            <SelectElement
              id="TAG"
              onChange={this.onChangeTag}
              value={currentTag}
            >
              {tagsList.map(eachTag => (
                <OptionElement value={eachTag.optionId} key={eachTag.optionId}>
                  {eachTag.displayText}
                </OptionElement>
              ))}
            </SelectElement>
          </InputContainer>
          <AddTaskButton type="submit">Add Task</AddTaskButton>
        </LeftContainer>
        <RightContainer>
          <Heading>Tags</Heading>
          <TagButtonsContainer>
            {tagsList.map(eachTag => (
              <TagButton
                key={eachTag.optionId}
                tagDetails={eachTag}
                onClickActiveTag={this.onClickActiveTag}
              />
            ))}
          </TagButtonsContainer>
          <Heading>Tasks</Heading>
          {filteredTaskList.length === 0 ? (
            <NoTasksContainer>
              <NoTasksDescription>No Tasks Added Yet</NoTasksDescription>
            </NoTasksContainer>
          ) : (
            <TasksContainer>
              {filteredTaskList.map(eachTask => (
                <TaskItem key={eachTask.id} taskDetails={eachTask} />
              ))}
            </TasksContainer>
          )}
        </RightContainer>
      </BgContainer>
    )
  }
}

export default App
