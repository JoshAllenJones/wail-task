import {Grid, Paper, Text, Container, createStyles} from '@mantine/core'
import {RichTextEditor} from '@mantine/rte'


const useStyles = createStyles((theme) => ({
    root: {
        border: "none"
    },
    toolbar: {
        border: "none"
    },
    toolbarControl: {
        border: "none"
    }
}))


const BlockCard = (props) => {
    const {classes} = useStyles()


    return (
        <Grid.Col span={12}>
            <Paper shadow="md" p="md" style={{marginRight: "None"}}>
                <Text>{props.title}</Text>
                <RichTextEditor classNames={{
                    root: classes.root,
                    toolbar: classes.toolbar,

                }} />
            </Paper>
        </Grid.Col>

    )
}

export default BlockCard