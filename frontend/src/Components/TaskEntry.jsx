import { Card, Grid, Paper, TextInput, Text, Button } from "@mantine/core";
import taskListAtom from '../atoms/taskListAtom'
import {useRecoilState} from 'recoil'
import {CreateMainBlock} from '../../wailsjs/go/main/App.js'
import {main} from '../../wailsjs/go/models.ts'
import {useState} from 'react';

function TaskEntry(props) {

    const [taskListState, setTaskListState] = useRecoilState(taskListAtom)
    const [inputState, setInputState] = useState("")
    
    let postTask = (taskTitle) => {
      var newTask = new main.Task()
      newTask.title = taskTitle
      newTask.projectId = 1
      CreateMainBlock(newTask).then((response)=> {
        console.log(response)
      })
    }
  
    let handleEnter = (event) => {
        console.log(inputState)
        setInputState(event.target.value)
        if(event.key == 'Enter'){
            event.preventDefault()
            if (event.target.value.trim().length !== 0){
              setTaskListState((current) => [...current, inputState])
              postTask(inputState)
              setInputState("")
              
            }
          }
        return false
  }

    let submitHandler = (event) => {
        console.log('WOAAasdasdSDASDASDO!')
    }

    let clickHandler = (evt) => {
      evt.preventDefault()
      postTask(inputState)
      setTaskListState((current) => [...current, inputState])

    }
    
  
    return (
    <Paper shadow="xs" p="md" mb={3}>
    <form onSubmit={submitHandler}>
      <Grid>
        <Grid.Col span={10}>
          <Grid>
            <Grid.Col span={12}>
              <TextInput sx={{input: {border: "none"}}} value={inputState} onChange={ (event) => setInputState(event.target.value)}  onKeyDown={handleEnter}/>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button variant="gradient" onClick={clickHandler}  type="submit"  gradient={{ from: "indigo", to: "cyan" }} fullWidth>
            Submit
          </Button>
        </Grid.Col>
      </Grid>
      </form>
    </Paper>
  );
}

export default TaskEntry;
