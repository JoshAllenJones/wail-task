import {Grid, Paper, Text, Container, createStyles, Title, Group, ActionIcon} from '@mantine/core'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Pencil2Icon } from '@radix-ui/react-icons'

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
    const [showEditor, setShowEditor] = useState(false)
    const [taskContent, setTaskContent] = useState("ay yeah yeah")

    let toggleEditor = () => {
        setShowEditor(!showEditor)
        // Save on toggle here? Also consider saving on a timer?
    }

    


    let DescriptionSection = () => {
        if (showEditor) {
            return (
                <ReactQuill key={props.id} defaultValue={taskContent}  />
            )
        } else {
            return (
                <ReactMarkdown />
            )
        }
    }

    return (
            <Paper shadow="md" p="xl">
                <Group position="apart">
                    <Title size="h4">{props.title}</Title>
                    <ActionIcon size="lg" onClick={toggleEditor} color="indigo" >
                        <Pencil2Icon height={18} width={18} />
                    </ActionIcon>
                </Group>
                <DescriptionSection />
            </Paper>

    )
}

export default BlockCard