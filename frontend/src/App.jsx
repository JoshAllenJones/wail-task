import { useState, useEffect } from "react";
import logo from "./assets/images/logo-universal.png";
import "./App.css";
import { GetFileList } from "../wailsjs/go/main/App";
import TaskEntry from "./Components/TaskEntry";
import { Grid } from '@mantine/core';

function App() {


  return (
    
    <Grid className="root-grid-thing">
      <Grid.Col span={2}>

      </Grid.Col>
      <Grid.Col span={10}>
        <TaskEntry />
      </Grid.Col>
    </Grid>

  );
}

export default App;
