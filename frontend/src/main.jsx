import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import { MantineProvider, Container } from '@mantine/core'
 import {RecoilRoot} from 'recoil';

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
        <RecoilRoot>
            <MantineProvider>
                <App/>

            </MantineProvider>
        </RecoilRoot>
)
