import { useState, useEffect } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";

import TaskEntry from "./Components/TaskEntry";
import BlockCard from "./Components/TaskCard"

import { Grid, Card, Paper, Text, ScrollArea, Button, Stack } from "@mantine/core";
import taskListAtom from "./atoms/taskListAtom";
import currentProjectAtom from "./atoms/currentProjectAtom";
import { useRecoilState } from "recoil";
import { GetTasks } from "../wailsjs/go/main/App";
import SideNav from './Components/SideNav'

function App() {
  const [taskList, setTaskList] = useRecoilState(taskListAtom);
  const [currentProject, setCurrentProject] = useRecoilState(currentProjectAtom)

  useEffect(() => {
    GetTasks(1).then((response) => {
      console.log(response)
      setTaskList(response)
    })
  }, [])

  const TaskItems =  () => taskList.map((item) => (
    <BlockCard {...item} key={item.id} />
  ));

  return (

    <Grid className="root-grid-thing">
      <Grid.Col span={2}>
        <SideNav />
      </Grid.Col>
      <Grid.Col span={10}>
        <Stack>
          <TaskEntry />
          <TaskItems />
        </Stack>
      </Grid.Col>
    </Grid>

  );
}

export default App;
