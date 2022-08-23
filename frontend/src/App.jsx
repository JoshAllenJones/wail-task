import { useState, useEffect } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { GetFileList } from "../wailsjs/go/main/App";
import TaskEntry from "./Components/TaskEntry";
import { Grid, Card } from '@mantine/core';
import taskListAtom from "./atoms/taskListAtom";
import { useRecoilState } from "recoil";

function App() {

  const [taskList, setTaskList ] = useRecoilState(taskListAtom)

  const taskItems = taskList.map((item, i) => 
    <span key={i}>{item}</span> 
  )


  return (
    
    <Grid className="root-grid-thing">
      <Grid.Col span={2}>

      </Grid.Col>
      <Grid.Col span={10}>
        <TaskEntry />
        <Grid>
          {taskItems}
        </Grid>

      </Grid.Col>
    </Grid>

  );
}

export default App;
