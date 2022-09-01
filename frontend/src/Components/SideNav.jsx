import { Box, NavLink } from "@mantine/core";
import { useState, useEffect } from "react";
import {GetProjects} from '../../wailsjs/go/main/App'

const SideNav = () => {
	const [projectList, setProjectList] = useState([])
	
	
	useEffect(() => {
		GetProjects().then((result) => {
			console.log('RESULT BELOW')
			console.log(result)
			setProjectList(result)
			console.log(projectList)
		})
	}, [setProjectList])

	const ProjectNodes = () => projectList.map((item, i) => <NavLink key={i} label={item.title} />)
	
	
	
	
	
	return(
		<Box>
			<ProjectNodes />
		</Box>
	)
	
}

export default SideNav