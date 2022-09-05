import {Grid, Paper, Textarea, Container, Title,
     Group, ActionIcon, createStyles, Text} from '@mantine/core'
import { RichTextEditor } from '@mantine/rte';
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { main } from '../../wailsjs/go/models';
import { UpdateTask } from '../../wailsjs/go/main/App';



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
    let blockId = props.mainBlockId
    const {classes} = useStyles()
    const [showEditor, setShowEditor] = useState(false)
    const [taskContent, setTaskContent] = useState(props.content)

    let toggleEditor = () => {
        setShowEditor(!showEditor)
        // Save on toggle here? Also consider saving on a timer?
    }

    let handleBlur = () => {
        var taskObj = new main.Task()
        taskObj.mainBlockId = blockId
        taskObj.content = taskContent
        console.log(taskObj)
        UpdateTask(taskObj).then((response) => {
            console.log("response")
        })
        console.log('UnBlurrrrrr')
        

    }
    





    let handleTextArea = (event) => {
        setTaskContent(event.target.value)
    }

    return (
            <Paper shadow="md" radius="md" p="xl">
                <Group position="apart">
                    <Title size="h4">{props.title}</Title>
                    <Text>{props.createdFmt}</Text>
                </Group>
                <Textarea classNames={{
                    input: classes.input
                }} onBlur={handleBlur} onChange={handleTextArea} autosize value={taskContent} />            
            </Paper>

    )
}

export default BlockCard