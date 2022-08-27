import { Box, NavLink } from "@mantine/core";
import { useState, useEffect } from "react";
import {GetProjects} from '../../wailsjs/go/main/App'

const SideNav = () => {
	const [projectList, setProjectList] = useState(null)
	
	
	useEffect(() => {
		GetProjects().then((result) => {
			console.log(result)
			setProjectList(result)
		})
	})
	
	let NavItemList
	
	return(
		<Box>
			
			
		</Box>
	)
	
}