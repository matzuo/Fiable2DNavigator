import React from 'react'
import GridPaperComponent from './grid-paper.component'
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

export default {
    title: 'Grid-Paper',
    component: GridPaperComponent
}

export const GridPaperNorth = () => <GridPaperComponent id={1} item={<NorthIcon />}/>
export const GridPaperSouth = () => <GridPaperComponent id={1} item={<SouthIcon />}/>
export const GridPaperEast = () => <GridPaperComponent id={1} item={<EastIcon />}/>
export const GridPaperWest = () => <GridPaperComponent id={1} item={<WestIcon />}/>