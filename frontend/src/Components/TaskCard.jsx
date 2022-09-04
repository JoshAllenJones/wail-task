import {Grid, Paper, Textarea, Container, Title,
     Group, ActionIcon, createStyles, Text} from '@mantine/core'
import { RichTextEditor } from '@mantine/rte';
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Pencil2Icon } from '@radix-ui/react-icons'

const useStyles = createStyles((theme) => ({
    input: {
        border: "none",
        paddingLeft: 0,
        paddingRight: 0
    }
}))

// const useStyles = createStyles((theme) => ({
//     root: {
//         border: "none"
//     },
//     toolbar: {
//         border: "none",
//         paddingLeft: 0,
//         paddingRight: 0,
        
//     },
//     toolbarGroup: {
//         marginLeft: 0,
//         marginRight: 0
//     },
//     toolbarControl: {
//         border: "none"
//     },
//     toolbarInner: {
//         display: 'flex',
//         justifyContent: 'space-between'
//     }
// }))




const BlockCard = (props) => {
    const {classes} = useStyles()
    const [showEditor, setShowEditor] = useState(false)
    const [taskContent, setTaskContent] = useState("ay yeah yeah")

    let toggleEditor = () => {
        setShowEditor(!showEditor)
        // Save on toggle here? Also consider saving on a timer?
    }

    





    let handleTextArea = (event) => {
        setTaskContent(event.target.value)
    }

    return (
            <Paper shadow="md" radius="md" p="xl">
                <Group position="apart">
                    <Title size="h4">{props.title}</Title>
                    <Text>{props.created}</Text>
                </Group>
                <Textarea classNames={{
                    input: classes.input
                }} onChange={handleTextArea} autosize value={taskContent} />            
            </Paper>

    )
}

export default BlockCard