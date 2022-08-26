import { useState, useEffect } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import TaskEntry from "./Components/TaskEntry";
import { Grid, Card, Paper, Text, ScrollArea, Button } from "@mantine/core";
import taskListAtom from "./atoms/taskListAtom";
import { useRecoilState } from "recoil";

function App() {
  const [taskList, setTaskList] = useRecoilState(taskListAtom);

  const taskItems = taskList.map((item, i) => (
    <Grid.Col span={12}>
      <Paper shadow="xs" p="md">
        <Text key={i}>{item}</Text>
      </Paper>
    </Grid.Col>
  ));

  return (
    <Grid className="root-grid-thing">
      <Grid.Col span={2}></Grid.Col>
      <Grid.Col span={10}>
        <Grid>
          <Grid.Col span={12}>
            <TaskEntry />
          </Grid.Col>
        </Grid>

        <ScrollArea style={{height: "90vh"}}>
          <Grid>{taskItems}</Grid>
        </ScrollArea>
      </Grid.Col>
    </Grid>
  );
}

export default App;
