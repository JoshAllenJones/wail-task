import { Card, Grid, Paper, TextInput, Text } from '@mantine/core';


function TaskEntry(props){
    
    return (
        <Paper>
            <Grid>
                <Grid.Col span={10}>
                    <Grid>
                        <Grid.Col span={12}><TextInput /> </Grid.Col>
                    </Grid>
                    
                </Grid.Col>
                <Grid.Col span={2}>
                    <Text>Okay</Text>
                </Grid.Col>
            </Grid>
        </Paper>
    )
}

export default TaskEntry