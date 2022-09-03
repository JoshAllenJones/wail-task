import {Grid, Paper, Text, Container, createStyles} from '@mantine/core'
import {RichTextEditor} from '@mantine/rte'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
    root: {
        border: "none"
    },
    toolbar: {
        border: "none",
        paddingLeft: 0,
        paddingRight: 0,
        
    },
    toolbarGroup: {
        marginLeft: 0,
        marginRight: 0
    },
    toolbarControl: {
        border: "none"
    },
    toolbarInner: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))




const BlockCard = (props) => {
    const {classes} = useStyles()
    const [showEditor, setShowEditor] = useState(false)

    let DescriptionSection = () => {
        if (showEditor) {
            return (
                <RichTextEditor classNames={{
                    root: classes.root,
                    toolbar: classes.toolbar,
                    toolbarGroup: classes.toolbarGroup,
                    toolbarInner: classes.toolbarInner

                }} />
            )
        } else {
            return (
                <Text>Here is the task description</Text>
            )
        }
    }

    return (
            <Paper shadow="md" p="xl">
                <Text>{props.title}</Text>
                <DescriptionSection />
            </Paper>

    )
}

export default BlockCard