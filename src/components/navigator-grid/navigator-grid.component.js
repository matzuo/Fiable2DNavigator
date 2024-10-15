import React, {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid2';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import GridPaperComponent from '../grid-paper/grid-paper.component';
import {CoordinateDataModel} from './../../models/coordinate-data.model';
import {validateInput} from './../../utils/validator.utils';
import {getIconDirection} from './../../utils/helper.utils';

export default function NavigatorGrid({inputValue}) {
    const rows = 5; // Number of rows
    const cols = 5; // Number of columns
    const [coordinateData, setCoordinateData] = useState({ ...CoordinateDataModel });

    useEffect(() => {
        handleValueChange(inputValue);
    }, [inputValue]);

    const handleValueChange = (newValue) => {       
        setCoordinateData({ ...validateInput(newValue) });
    }

    const displayIcon = (rowIndex,colIndex) => {
        if(rowIndex == coordinateData.x 
            && colIndex == coordinateData.y){
            return getIconDirection(coordinateData.direction);
        }else{
            return null;
        }
    };

    const matrix = Array.from({ length: rows }, (_, rowIndex) => 
        Array.from({ length: cols }, (_, colIndex) => displayIcon(rowIndex,colIndex))
    );

    return (
        <>
            <Typography variant="h2">
                2D Navigator
            </Typography>
            <br />
            { (!coordinateData.isValid) && <Alert severity="error">{coordinateData.errorMessage}</Alert> }
            <br />
            {matrix.slice().reverse().map((row, rowIndex) => (
                <Grid container key={rowIndex} xs={12}>
                {row.map((item, colIndex) => (
                    <GridPaperComponent key={colIndex} id={colIndex}  item={item}/>
                ))}
                </Grid>
            ))}
        </>
    );
}