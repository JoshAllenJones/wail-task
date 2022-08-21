import {useState, useEffect} from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import { GetFileList } from "../wailsjs/go/main/App";

function App() {

    const [fileList, setFileList] = useState([])
    
    useEffect(() => {
        GetFileList().then((resp) => {
            console.log(resp);
            setFileList(resp)
        })
    }, []);

    return (
        <div>
            {fileList.map((fileName, i)=> 
                <div key={i}>{fileName}</div>
                )}

        </div>

        
    )
}

export default App
