import { Card, Grid, Paper, TextInput, Text, Button } from "@mantine/core";
import taskListAtom from '../atoms/taskListAtom'
import {useRecoilState} from 'recoil'

function TaskEntry(props) {

    const [taskListState, setTaskListState] = useRecoilState(taskListAtom)
  
    let handleEnter = (event) => {
        if(event.key == 'Enter'){
            console.log('Wooh!')
        }
    }

    let submitHandler = (event) => {
        console.log('WOAAasdasdSDASDASDO!')
    }
    
  
    return (
    <Paper shadow="xs" p="md">
    <form onSubmit={submitHandler}>
      <Grid>
        <Grid.Col span={10}>
          <Grid>
            <Grid.Col span={12}>
              <TextInput sx={{input: {border: "None"}}}  onKeyDown={handleEnter} />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={2}>
          <Button variant="gradient"  type="submit"  gradient={{ from: "indigo", to: "cyan" }} fullWidth>
            Submit
          </Button>
        </Grid.Col>
      </Grid>
      </form>
    </Paper>
  );
}

export default TaskEntry;
