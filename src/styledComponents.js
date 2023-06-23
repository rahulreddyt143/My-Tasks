import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export const LeftContainer = styled.form`
  background-color: #1a171d;
  width: 30%;
  height: 80vh;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'Roboto';
  color: #f3aa4e;
  font-size: 25px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 20px;
`

export const LabelElement = styled.label`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 15px;
  margin-bottom: 5px;
`

export const InputElement = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  outline: none;
  padding: 5px 10px;
`

export const SelectElement = styled.select`
  padding: 5px 10px;
  outline: none;
`

export const OptionElement = styled.option`
  font-family: 'Roboto';
  font-size: 15px;
`

export const AddTaskButton = styled.button`
  background-color: #f3aa4e;
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 13px;
  margin-top: 25px;
  border: none;
  outline: none;
  padding: 5px 20px;
  border-radius: 5px;
`

export const RightContainer = styled.div`
  background-color: #000000;
  width: 50%;
  height: 80vh;
  padding: 30px 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
`
export const TagButtonsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const TasksContainer = styled.ul`
  padding-left: 0px;
`
export const NoTasksContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const NoTasksDescription = styled.p`
  font-family: 'Roboto';
  color: #f1f5f9;
  font-weight: 500;
  font-size: 18px;
`
