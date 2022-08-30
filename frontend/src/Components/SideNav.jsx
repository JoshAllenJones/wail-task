import { Box, NavLink } from "@mantine/core";
import { useState, useEffect } from "react";
import {GetProjects} from '../../wailsjs/go/main/App'

const SideNav = () => {
	const [projectList, setProjectList] = useState([])
	
	
	useEffect(() => {
		GetProjects().then((result) => {
			console.log('RESULT BELOW')
			console.log(result)
		})
	}, [setProjectList])
	

	
	
	
	
	return(
		<Box>
			<span>Beep Boop</span>
			
		</Box>
	)
	
}

export default SideNav