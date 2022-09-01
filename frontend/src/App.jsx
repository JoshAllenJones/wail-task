import { useState, useEffect } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";

import TaskEntry from "./Components/TaskEntry";
import TaskCard from "./Components/TaskCard"

import { Grid, Card, Paper, Text, ScrollArea, Button, Container } from "@mantine/core";
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

  const taskItems =  taskList.map((item) => (
    <TaskCard {...item} />
  ));

  return (

    <Grid className="root-grid-thing">
      <Grid.Col span={2}>
        <SideNav />
      </Grid.Col>
      <Grid.Col span={10}>
        <Grid>
          <Grid.Col span={12}>
            <TaskEntry />
          </Grid.Col>
        </Grid>
        <ScrollArea>
          <Grid>{taskItems}</Grid>
        </ScrollArea>
      </Grid.Col>
    </Grid>

  );
}

export default App;
