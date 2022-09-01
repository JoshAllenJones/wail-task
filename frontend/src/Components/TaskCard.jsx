import {Grid, Paper, Text, Container} from '@mantine/core'



const BlockCard = (props) => {

    

    return (
        <Grid.Col span={12}>
            <Paper shadow="md" p="md" style={{marginRight: "None"}}>
                <Text>{props.title}</Text>
            </Paper>
        </Grid.Col>

    )
}

export default BlockCard